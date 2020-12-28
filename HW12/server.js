const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('.');
function accept(req, res) {
    // if (req == 'books.json') {
    //     file.serve(req, res);		// can set delay
    // } else
    if (req.url == 'data') {
        res = 'asd';
    }
}
// ------ run server -------
http.createServer(accept).listen(8080);
console.log("Server running on port 8080");
