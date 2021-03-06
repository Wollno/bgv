var space_id = '5gsv58a7otxv';
var access_token = 'c558d9ada52e505294f761fd446ee5beb4178bf38d9107d06d469aa655988cd9';

var contentful_base = 'https://cdn.contentful.com/spaces/';

function make_image_url(asset_id, assets){
    for(let i = 0; i < assets.length; i++){
        if(assets[i].sys.id == asset_id) return assets[i].fields.file.url; 
    }
}

function make_products(products, includes){
    var res = [];
    for(let i = 0; i < products.length; i++){
        for(let j = 0; j < includes[products[i].sys.linkType].length; j++){
            if(includes[products[i].sys.linkType][j].sys.id == products[i].sys.id){
                res.push(includes[products[i].sys.linkType][j]);
            }
        }
    }
    return res;
}

function render_body(body){
    if(body){
        ReactDOM.render(
            body,
            document.getElementById('root')
        );
    } else {
        ReactDOM.render(
            <h1>somerror</h1>,
            document.getElementById('root')
        );
    }
}

function make_collection(urlStub){
    var query = '&content_type=productList&fields.urlStub=' + urlStub;
    var space_url = 'https://cdn.contentful.com/spaces/' + space_id + '/entries?access_token=' + access_token + query;

    console.log(space_url);

    $.get(space_url).done(function(data){
        console.log(data);
        try {
            var parsed = typeof data == "object" ? data : JSON.parse(data);
            var includes = parsed.includes;
            var assets = includes.Asset;
            var entry = parsed.items[0];
            var title = entry.fields.name;
            var header_img = entry.fields.headerImage.sys.id;
            var cat_img = entry.fields.categoryImage.sys.id;
            var desc = entry.fields.description;
            var shoplink = entry.fields.shopLink;
            var footer = entry.fields.footer;

            var products = make_products(entry.fields.products, includes);
            console.log(products);
            $("title").text($("title").text() + " - " + title);

            const body = [(<div class={'page-header section-dark'} style={{backgroundImage: "url('" + make_image_url(header_img, assets) + "')"}}>
                        <div class={'filter'}></div>
                        <div class={"content-center"}>
                            <div class={"container"}>
                                <div class={"title-brand"}>
                                    <h1 class={"presentation-title"}>{title}</h1>
                                </div>

                                <h2 class={"presentation-subtitle text-center"}>Subtext under title! </h2>
                            </div>
                        </div>
                    </div>),
                    (<div style={{height: '500px'}}>
                    </div>)];
            render_body(body);
        } catch (e) {
            console.log(e);
            render_body(false);
        }
    }).fail(function(e){
        console.log("error");
        console.log(e);
    });
}