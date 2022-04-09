const express = require('express');

const router = express.Router();

router.post("/product", (request, response, next) => {
    console.log(request.body);
    response.redirect("/");
});

router.get("/add-product",(request, response, next) => {
response.send(`<form action="/admin/product" method="POST"><input type="text" name="product"><button type="sumbit">add product</button></form>`);
});

// router.post("/product", (request, response, next) => {
//     console.log(request.body);
//     response.redirect("/");
// });

// router.get("/add-product",(request, response, next) => {
// response.send(`<form action="/product" method="POST"><input type="text" name="product"><button type="sumbit">add product</button></form>`);
// });

module.exports = router;