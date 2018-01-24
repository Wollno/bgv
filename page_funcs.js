var space_id = '5gsv58a7otxv';
var access_token = 'c558d9ada52e505294f761fd446ee5beb4178bf38d9107d06d469aa655988cd9';

var contentful_base = 'https://cdn.contentful.com/spaces/';

function make_image_url(asset_id){
    return contentful_base + space_id + '/assets/' + asset_id + '?access_token=' + access_token;
}

function make_collection(urlStub){
    var query = '&content_type=productList&fields.urlStub=' + urlStub;
    var space_url = 'https://cdn.contentful.com/spaces/' + space_id + '/entries?access_token=' + access_token + query;

    $.get(space_url).done(function(data){
        console.log(data);
    }).fail(function(e){
        console.log("error");
        console.log(e);
    });
}