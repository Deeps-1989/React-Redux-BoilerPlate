var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const uuidV4 = require('uuid/v4');
var port = 3001 || process.env.PORT;
app.use(bodyParser.json()); // for parsing application/json

app.get("/api/getData", function(req,res){
    console.log("in node api request");
    const responseData = "Hi I am node";
    res.send(responseData);
});
app.post("/api/data", function(req,res){
    console.log("fetching data from front -end",req);
    const data = req.body;
    console.log("data is", data);
    const refId = uuidV4();
    let response = {
        statusCode:200,
        refId:refId
    }
    res.send(response);
});

app.listen(port, function(error){
    if(error) {
        throw error;
    }
    console.log(`Server started Listening on port ${port}`);
});