/**
 * Created by jaya on 7/4/15.
 */
var express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

var port = process.env.PORT || 3030;

app.listen(port,function(){
    console.log("Server Started on Port:"+port)
})