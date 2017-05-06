var express = require('express');
var app = express();
var path = require('path');

var port = 3000 || process.env.PORT;

app.use('/assets',express.static('./dist/'));
//app.use(webpack in dev mode)

app.listen(port, function(error){
    if(error) {
        throw error;
    }
    console.log(`Server started Listening on port ${port}`);
});