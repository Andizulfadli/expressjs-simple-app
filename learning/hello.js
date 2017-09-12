var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<b>Hello</b> World!");
    res.end();
}).listen(3000);
console.log("Server is running on localhost:3000");
