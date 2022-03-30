const http = require('http');
const server = http.createServer((request, response) =>
{
	console.log(request.method, request.url, request.headers);
});

server.listen(3000);