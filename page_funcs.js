var space_id = '5gsv58a7otxv';
var access_token = 'c558d9ada52e505294f761fd446ee5beb4178bf38d9107d06d469aa655988cd9';

var contentful_base = 'https://cdn.contentful.com/spaces/';

function make_image_url(asset_id){
    return contentful_base + space_id + '/assets/' + asset_id + '?access_token=' + access_token;
}

function make_products(products){
    var res = [];
    for(let i = 0; i < products.length; i++){

    }
}

function make_collection(urlStub){
    var query = '&content_type=productList&fields.urlStub=' + urlStub;
    var space_url = 'https://cdn.contentful.com/spaces/' + space_id + '/entries?access_token=' + access_token + query;

    console.log(space_url);

    $.get(space_url).done(function(data){
        console.log(data);
        try {
            var entry = JSON.parse(data)["items"][0];
            var title = entry.name;
            var header_img = entry.headerImage.sys.id;
            var cat_img = entry.categoryImage.sys.id;
            var desc = entry.description;
            var shoplink = entry.shopLink;
            var footer = entry.footer;

            var products = make_products(entry.products);

            $("title").text(title);

            return class bgvcollection extends RTCIceCandidate.Component {
                render() {
                    <div class={'page-header section-dark'} style={`background-image: url('${make_image_url(header_img)}')`}>
                        <div class={'filter'}></div>
                        <div class={"content-center"}>
                            <div class={"container"}>
                                <div class={"title-brand"}>
                                    <h1 class={"presentation-title"}>{title}</h1>
                                    <div class={"fog-low"}>
                                        <img src={"assets/img/fog-low.png"} alt={""} />
                                    </div>
                                    <div class={"fog-low right"}>
                                        <img src={"assets/img/fog-low.png"} alt={""} />
                                    </div>
                                </div>

                                <h2 class={"presentation-subtitle text-center"}>Make your mark with a Free Bootstrap 4 UI Kit! </h2>
                            </div>
                        </div>
                        <div class={"moving-clouds"} style={"background-image: url('assets/img/clouds.png'); "}>

                        </div>
                        <h6 class={"category category-absolute"}>Designed and coded by
                            <a href={"https://www.creative-tim.com"} target={"_blank"}>
                                <img src={"assets/img/creative-tim-white-slim2.png"} class={"creative-tim-logo"}/ >
                            </a>
                        </h6>
                    </div>
                }
            }
        } catch (e) {
            console.log(e);
            return false;
        }
    }).fail(function(e){
        console.log("error");
        console.log(e);
    });

    return false;
}