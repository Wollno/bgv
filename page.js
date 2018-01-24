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

var pathparts = window.location.pathname.substring(base.length).split("/");
var searchparts = makesearchparts(window.location.search);
var fragment = window.location.hash.substring(1);

console.log(pathparts);

for(var url in special_urls){
    if(url == pathparts) pathparts = special_urls[url];
}

console.log(pathparts);

var body;

if(pathparts[0] == "collections"){
    body = make_collection(pathparts[1]);
}

console.log("body: ");
console.log(body);
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
