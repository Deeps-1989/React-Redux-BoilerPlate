var express = require('express');
var app = express();
var path = require('path');

var port = 3001 || process.env.PORT;

//app.use('/assets',express.static('./dist/'));
//app.use(webpack in dev mode)
app.get("/api/getData", function(req,res){
    console.log("in node api request");
    const responseData = "Hi I am node";
    res.send(responseData);
});

app.listen(port, function(error){
    if(error) {
        throw error;
    }
    console.log(`Server started Listening on port ${port}`);
});