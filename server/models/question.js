var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    paperId:String,
    name:String,
    questionId:String,
    qnText:String,
    options:[],
    ans:String

});
questionSchema.methods = {

};
var question = mongoose.model('question', questionSchema);

function createDefaultquestions() {
    question.find({}).exec(function(err, collection) {
        if(collection.length === 0) {

            question.create({paperId:1,name:'Mathematics',questionId:1,qnText:'1+1',options:[2,3,4,5],ans:2});
            question.create({paperId:1,name:'Mathematics',questionId:2,qnText:'2+1',options:[2,3,4,5],ans:3});
            question.create({paperId:1,name:'Mathematics',questionId:3,qnText:'2+2',options:[2,3,4,5],ans:4});
            question.create({paperId:1,name:'Mathematics',questionId:4,qnText:'3+1',options:[2,3,4,5],ans:4});
            question.create({paperId:1,name:'Mathematics',questionId:5,qnText:'2+3',options:[2,3,4,5],ans:5});
        }
    })
};

exports.createDefaultquestions = createDefaultquestions;