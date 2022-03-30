const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.setHeader("Content-type", "text/html");
        response.write("<h1>This is the home page!<h1>");
        response.write(`<form action="/message" method="POST"><input tye="text" name="message_id"><button type="submit">Zap</button></form>`);
        return response.end();
    }
    if (url === '/message' && method === 'POST') {
        
       setTimeout(()=>{
        fs.writeFileSync("message.txt",new Date().toString());
        response.setHeader("Location","/");
        response.statusCode = 302;
        return response.end();
       },2000);

    }

});

server.listen(3000);