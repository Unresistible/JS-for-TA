const http = require('http');
const os = require('os');
const path = require('path');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h2>System information</h2>\n');
  response.write('Current user name: '+ os.userInfo().username +'<br>');
  response.write('OS type: '+ os.type() +'<br>');
  response.write('System work time: '+ (os.uptime() / 60).toFixed(2) +' minutes<br>');
  response.write('Current work directory: '+ __dirname +'<br>');
  response.end('Server file name: '+ path.basename(__filename) +'<br>');
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
