const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello World\n');
});
server.listen(port, hostname, function(){
  console.log('Server running at http://${hostname}:${port}/');
});

//webserver.js 의 코드를 더욱 간결하게 작성함
