const http = require('http');
const server = http.createServer((request, response) =>
{
	response.setHeader("Content-type","text/html");
	response.write("<h1>Yep! Server is up...");
	response.write("<p>the server is Node JS</p>");
	response.end();
});

server.listen(3000);