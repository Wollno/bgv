var base = escape("https://wollno.github.io/bgv/");

var a = escape(window.location).substring(base.length);

ReactDOM.render(
    <h1>We're at: {a}</h1>,
    document.getElementById('root')
);