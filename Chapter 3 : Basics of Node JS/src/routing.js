const http = require('http');
const server = http.createServer((request, response) =>
{
    const url = request.url;
    const method = request.method;
    if(url === '/')
    {
        response.setHeader("Content-type","text/html");
        response.write("<h1>This is the home page!</h1>");
        response.write("<p>the server is Node JS</p>");
        response.write(`<form action="/message" method="POST"><input type="text"><button type="submit">Zap</button></form>`);
        return response.end();
    }
    if(url === '/message' && method === 'POST')
    {
        response.setHeader("Content-type","text/html");
        response.write("<h1>This is the message page!</h1>");
        response.write("<p>the server is Node JS</p>");
        return response.end();
    
    }
    
});

server.listen(3000);