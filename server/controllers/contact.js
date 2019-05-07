const {validationResult} = require('express-validator/check');
const Contact = require('../models/contact');
exports.postContact = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01';
        error.statusCode = 422;
        error.errors = errors.array();
        throw error;
    }
    const contact = new Contact(req.body);
    contact.save().then(result=>{
        res.status(201).json({
            status:"00",
            message: "Contact submitted Successfully",
            contact:result._id
        })
    }).catch(err=>{
        if(!err.statusCode){
            err.status = '01';
            err.message = 'Internal Server Error';
            err.statusCode = 500;            
        }    
        next(err);
    })    
}