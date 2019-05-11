const User = require('../models/user');
module.exports = (req, res, next) =>{
    console.log('cookies=', req.cookies.auth)
    const token = req.cookies.auth;    
    User.verifyToken(token, (err,user)=>{
        if(!user){
            const error = new Error('Unauthorized User');
            error.status = '01',
            error.statusCode = 401;
            return next(error)
        }
        req.token = token;
        req.user = user
        next();
    })    
}