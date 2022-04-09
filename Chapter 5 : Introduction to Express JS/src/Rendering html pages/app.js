const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const admin_routes = require('./routes/admin');
const shop_routes = require('./routes/shop');



const app = express();

app.use(bodyParser.urlencoded({
    extended :true
}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admin_routes);
app.use('/admin',shop_routes);
// app.use(admin_routes);
// app.use(shop_routes);

// app.use("/product", (request, response, next) => {
//     console.log(request.body);
//     response.redirect("/");
// });

// app.use("/add-product",(request, response, next) => {
// response.send(`<form action="/product" method="POST"><input type="text" name="product"><button type="sumbit">add product</button></form>`);
// });

app.get("/",(request, response, next) => {
response.send(`<h1>Express JS, welcomes you to homepage</h1>`);
});

app.use((request,response,next) => {
	response.status(400).sendFile(path.join(__dirname,'/','views','404.html'));
});

app.listen(3000);