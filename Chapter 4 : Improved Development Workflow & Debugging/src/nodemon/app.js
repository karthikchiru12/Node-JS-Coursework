const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader("Content-type", "text/html");
        response.write("<html><head><title>Assignment 1</title></head><body>")
        response.write("<h1>Welcome to home page</h1>");
        response.write(`<form action="/create_user" method="POST">`);
        response.write(`<input type="text" name="username">`);
        response.write(`<button type="submit">create user</button>`);
        response.write(`</form>`);
        response.write(`<button type="submit" onclick="window.location.href='/users'">Users list</button>`);
        response.write(`</body></html>`);
        return response.end();

    }
    if (url === '/create_user' && method === "POST") {
        const body = [];
        request.on("data", (chunk) => {
            body.push(chunk);
        });

        request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            response.setHeader("Content-type", "text/html");
            response.write(`<h1>${parsedBody} created</h1>`);
            return response.end();
        });
    }

    if(url === '/users')
    {
        response.setHeader("Content-type", "text/html");
        response.write(`<ul>`);
        for(var val = 2; val < 10; val++)
        {
            response.write(`<li>User ${val}</li>`);
        }
        return response.end();
    }
});

server.listen(3000);