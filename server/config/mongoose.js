
var mongoose = require('mongoose');
   questionModel=require('../models/question')

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('questiondb db opened');
    });
    questionModel.createDefaultquestions();
};