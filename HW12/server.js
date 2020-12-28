const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server('.', {
    cache: 0
});

function accept(req, res) {
    //console.log('asd + asd: ' + req);
    if (req.url == '/vote'){
        console.log('asd + asd: ');
        res.end('You vote is accepted: ' + new Date());
    }
    else
        {
            console.log('asd2 + asd2: ');
            file.serve(req, res);
        }

    if (req.url == '/books.json') {
        setTimeout(function() {
            file.serve(req, res);
        }, 2000)}
        else
        {
            file.serve(req, res);
        }
}

// ------ run server -------
http.createServer(accept).listen(8080);
console.log("Server running on http://localhost:8080");
