const http = require('http');
const personalModule = require('./personalmodule.js');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(personalModule.greetings());
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
