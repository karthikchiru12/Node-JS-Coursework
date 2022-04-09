const express = require('express');
const router = express.Router();

router.get("/shop", (request, response, next) => {
    response.send(`<h1>Here you can see all the items.</h1>`);
});

module.exports = router;