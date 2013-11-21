var http = require('http')
  , handler = function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }
  , server = http.createServer(handler)
  
server.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
