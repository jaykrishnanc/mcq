/**
 * Created by jaya on 9/4/15.
 */
var question = require('mongoose').model('question');

exports.getQuestions = function(req, res) {
    question.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};