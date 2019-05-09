const Project = require('../models/project');
const {validationResult} = require('express-validator/check')
exports.postProject = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01';
        error.statusCode = 422;
        error.errors = errors.array();
        throw error;
    }
    const project = new Project(req.body);
    project.save().then(result=>{
        res.status(201).json({
            status:"00",
            message: "Project Saved Successfully",
            project:result._id
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

exports.getProjects = (req, res, next) => {
    Project.find().then(projects=>{
        console.log(projects)
        res.status(200).json({
            status:"00",
            message:'Fetch Projects Successfully',
            projects:projects
        })
    }).catch(err=>{
        if(!err.statusCode){
            err.status = '01';
            err.statusCode = 500;            
        }    
        next(err);
    })
}