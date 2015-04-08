var mongoose = require('mongoose');

var qnSchema = mongoose.Schema(
    {

        paper:{
            id:String,
            name:String,
            description:String
        },
        questions:{
            id:String,
            qnText:String,
            qnPaperId:String,
            options:{
                id:String,
                qnId:String,
                opText:String,
                isAnswer:Boolean
            }
        }
    }

);

var question=mongoose.model('Question',qnSchema);