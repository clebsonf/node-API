
const express = require('express');
const app = express();
const router = express.Router();

var route = router.get('/',(req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1",
        author: "Clebson"
    })
});
app.use('/', route);

module.exports = app;