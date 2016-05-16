var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect();
server.use(serveStatic('/Users/haojie/rabbit'));
server.listen(8080);