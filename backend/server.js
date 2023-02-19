var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

app.use(
    cors({
        // restrict calls to those this address
        origin: "http://localhost:3000",
        // only allow POST requests
        methods: ["POST"]
    })
);

app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});