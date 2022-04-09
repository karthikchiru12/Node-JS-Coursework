const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/shop", (request, response, next) => {
    // response.send(`<h1>Here you can see all the items.</h1>`);
    response.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = router;