var whitelist = ['.css', '.js', '.svg']; // filter only allows items with matching extensions

var events = [
    {
        file: 'css/style.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    },
    {
        file: 'assets/tk.svg'
    }
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
})

console.log(filtered);

