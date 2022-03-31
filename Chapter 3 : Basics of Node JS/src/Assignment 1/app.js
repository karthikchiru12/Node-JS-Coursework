const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if(url === '/')
    {
        response.setHeader("Content-type","text/html");
        response.write("<html><head><title>Assignment 1</title></head><body>")
        response.write("<h1>Welcome to home page</h1>");
        response.write(`<form action="/create_user" method="POST">`);
        response.write(`<input type="text" name="username">`);
        response.write(`<button type="submit">create user</button>`);
        response.write(`</form></body></html>`);
        return response.end();

    }
});

server.listen(3000);