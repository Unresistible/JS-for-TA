const http = require('http');
const os = require('os');
const path = require('path');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Current user name: '+ os.userInfo().username +'\n');
  response.write('OS type: '+ os.type() +'\n');
  response.write('System work time: '+ (os.uptime() / 60).toFixed(2) +' minutes\n');
  response.write('Current work directory: '+ __dirname +'\n');
  response.end('Server file name: '+ path.basename(__filename) +'\n');
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
