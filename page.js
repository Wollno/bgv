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

var pathparts = window.location.pathname.substring(base.length).split("/");
var searchparts = makesearchparts(window.location.search);
var fragment = window.location.hash.substring(1);

console.log(pathparts);
console.log(searchparts);
console.log(fragment);

ReactDOM.render(
    <h1>We're at: {pathparts}</h1>,
    document.getElementById('root')
);