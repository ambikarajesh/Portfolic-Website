const express = require('express');
const {check} = require('express-validator/check');
const router = express.Router();
const projectController = require('../controllers/project');
const isAuth = require('../middlware/isAuth');

router.get('/', projectController.getProjects);
router.post('/add_project', [
                        check('title').trim().not().isEmpty().isLength({min:5}).withMessage('Must have atleast 5 chars in Title'),
                        check('languages').trim().not().isEmpty().isLength({min:4}).withMessage('Must have atleast 4 chars in Languages'),
                        check('link').trim().not().isEmpty().isLength({min:10}).withMessage('Must have atleast 10 chars in Description'),
                        check('image').trim().not().isEmpty().withMessage('Must Upload an Image'),
                        ],isAuth, projectController.postProject);

module.exports = router;