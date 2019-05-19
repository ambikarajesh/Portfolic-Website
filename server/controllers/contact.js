const {validationResult} = require('express-validator/check');
const Contact = require('../models/contact');
var mailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// Use Smtp Protocol to send Email
var transporter = mailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GUSERID,
      pass: process.env.GPWD
    }
  });
  
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
        var mailOptions = {
            from: `${req.body.email}`,
            to: 'ambikula@gmail.com',
            subject: req.body.subject,
            text: `${req.body.name}  ${req.body.email}  ${req.body.message}`,
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
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