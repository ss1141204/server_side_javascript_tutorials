//javascript코드
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World Test');//해당 웹서버에 출력될 내용
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
