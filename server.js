var http = require('http');
var port = 18080;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>����</h1>');
    res.end('<p>��Ҫ��ת node �� mongodb !</p>');
}).listen(port);
