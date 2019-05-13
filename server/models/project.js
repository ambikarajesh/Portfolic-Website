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
    link:{
        type:String,
        required:true, 
    },
    imagePath:{
        type:String,
        required:true, 
    },
    imageName:{
        type:String,
        required:true, 
    },
}, {timestamps:true});
module.exports = mongoose.model('Project', projectSchma);

