///**
// * Created by jaya on 8/4/15.
// */
//var Schema=mongoose.Schema;
//var db=mongoose.connection;
////mongoose.connect('mongodb://localhost/questionDb');
//mongoose.connect();
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//    console.log("qustionDb opened")
//});
//
var mongoose = require('mongoose'),
    questionModel=require('../models/questions')

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('questiondb db opened');
    });
};