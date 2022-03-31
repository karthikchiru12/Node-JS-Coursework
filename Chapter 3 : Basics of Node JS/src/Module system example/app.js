const http = require('http');
const routes = require('./routing');

console.log(routes.hardCodedText);
const server = http.createServer(routes.handler);
server.listen(3000);