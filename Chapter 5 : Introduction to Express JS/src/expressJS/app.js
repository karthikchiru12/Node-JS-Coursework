// const http = require("http");
const express = require("express");

const app = express();

app.use((request, response, next) => {
    console.log("Into the funnel!.");
    next();
});


app.use("/karthik", (request, response, next) => {
    response.send(`<h1>Express JS, welcomes Karthik</h1>`);
});


app.use("/", (request, response, next) => {
    // response.setHeader('Content-type','text/html');
    // response.write(`<h1>Express JS!, welcomes you!</h1>`);
    // return response.end();
    response.send(`<h1>Express JS, welcomes you</h1>`);
});



// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);