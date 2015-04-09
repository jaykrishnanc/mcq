/**
 * Created by jaya on 7/4/15.
 */
var express = require('express');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];
//express
var app = express();

app.use(express.static(__dirname+'/public'));

require('./server/config/mongoose')(config);

var questions = require('./server/controllers/questions');
app.get('/api/questions', questions.getQuestions);

app.listen(config.port,function(){
    console.log("Server Started on Port:"+config.port)
})