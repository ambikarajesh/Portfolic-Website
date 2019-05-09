const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchma = new Schema({
    title:{
        type:String,
        required:true, 
    },
    languages:{
        type:String,
        required:true,  
    },
    description:{
        type:String,
        required:true, 
    },
    image:{
        type:String,
        required:true, 
    }
}, {timestamps:true});
module.exports = mongoose.model('Project', projectSchma);

