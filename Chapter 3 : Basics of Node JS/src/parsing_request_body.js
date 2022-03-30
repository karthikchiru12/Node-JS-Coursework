const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.setHeader("Content-type", "text/html");
        response.write("<h1>This is the home page!</h1>");
        response.write(`<form action="/message" method="POST"><input tye="text" name="message_id"><button type="submit">Zap</button></form>`);
        return response.end();
    }
    if (url === '/message' && method === 'POST') {
        
    const body = []
	request.on("data",(chunk) => {
	body.push(chunk);
	console.log(chunk);
	});

    var parsedBody = "";
	
	request.on("end",() => {
	parsedBody = Buffer.concat(body).toString();
	console.log(parsedBody);
    response.setHeader("Content-type", "text/html");
    response.write("<h1>Success! check your console </h1>");
    return response.end();
	});


    
    }

});

server.listen(3000);