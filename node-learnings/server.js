/** This is how to create a server */

var http = require('http');

var server  =  http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Thankyou for visting this page');
});

server.listen(8080);