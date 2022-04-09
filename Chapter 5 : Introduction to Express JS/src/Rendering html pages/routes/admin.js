const express = require('express');

const router = express.Router();

const path = require('path');

router.post("/product", (request, response, next) => {
    console.log(request.body);
    response.status(302).redirect("/");
});

router.get("/add-product",(request, response, next) => {
// response.send(`<form action="/admin/product" method="POST"><input type="text" name="product"><button type="sumbit">add product</button></form>`);
response.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// router.post("/product", (request, response, next) => {
//     console.log(request.body);
//     response.redirect("/");
// });

// router.get("/add-product",(request, response, next) => {
// response.send(`<form action="/product" method="POST"><input type="text" name="product"><button type="sumbit">add product</button></form>`);
// });

module.exports = router;