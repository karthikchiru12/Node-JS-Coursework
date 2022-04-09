const express = require('express');
const app = express();

app.use("/users", (request, response, next) => {
    let response_list = "";
    response_list += "<ul>";
    for (var val = 1; val <= 10; val++) {
        response_list += `<li>User ${val}</li>`;
    }
    response_list += "</ul>";
    response.send(response_list);

});

app.use("/",(request, response, next) => {
    console.log("Middleware1");
    next();
});

app.use("/",(request, response, next) => {
    console.log("Middleware2");
    response.send("This is the homepage");
});

app.listen(3000);