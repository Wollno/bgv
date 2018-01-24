var space_id = '5gsv58a7otxv';
var access_token = 'c558d9ada52e505294f761fd446ee5beb4178bf38d9107d06d469aa655988cd9';

var base = "/bgv/";

function makesearchparts(s){
    s = s.substring(1); //get rid of ?
    var bits = s.split("&");
    var searches = {}
    for (var i = 0; i < bits.length; i++){
        searches[bits[i].split("=")[0]] = bits[i].split("=")[1];
    }
    return searches;
}

var special_urls = {};
special_urls["fit"] = ['collections', 'fit'];
special_urls[""] = ['collections', 'index'];

var query = '&content_type=productList&fields.urlStub=fit'

var space_url = 'https://cdn.contentful.com/spaces/' + space_id + '/content_types?access_token=' + access_token + query;

$.get(space_url).done(function(data){
    console.log(data);
}).fail(function(e){
    console.log("error");
    console.log(e);
});

var pathparts = window.location.pathname.substring(base.length).split("/");
var searchparts = makesearchparts(window.location.search);
var fragment = window.location.hash.substring(1);

console.log(pathparts);


ReactDOM.render(
    <h1>We're at 1: {pathparts}</h1>,
    document.getElementById('body')
);
ReactDOM.render(
    <h1>We're at 2: {pathparts}</h1>,
    document.getElementById('body')
);
ReactDOM.render(
    <h1>We're at 3: {pathparts}</h1>,
    document.getElementById('body')
);