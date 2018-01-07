var base = "/bgv/";

var pathparts = window.location.pathname.substring(base.length).split("/");

ReactDOM.render(
    <h1>We're at: {a}</h1>,
    document.getElementById('root')
);