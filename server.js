/**
 * Created by jaya on 7/4/15.
 */
var express = require('express'),
    passport = require("passport"),
    Auth = require('./server/authentication/authorization.js');


var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];
//express
var app = express();

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(session({ secret: 'mcqs3' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./server/authentication/passport')(passport);

require('./server/config/mongoose')(config);

var questions = require('./server/controllers/questions');

app.get('/api/questions', passport.authenticate('local', { failureRedirect: '/login' }), questions.getQuestions);

app.get('/api/isLoggedIn', Auth.isAuthenticated, function(req, res) {
  res.json(req.user);
});

app.get('/logout', function (req, res) {
    req.logout();
    res.send(200);
});


app.listen(config.port,function(){
    console.log("Server Started on Port:"+config.port)
});