const express = require('express');
const {check} = require('express-validator/check');
const router = express.Router();
const contactController = require('../controllers/contact');
router.post('/contact', [
                        check('name').trim().not().isEmpty().isLength({min:2}).withMessage('Must have atleast 2 chars in Name'),
                        check('email').isEmail().withMessage('Invalid  Email !!!').normalizeEmail(),
                        check('subject').trim().not().isEmpty().isLength({min:2}).withMessage('Must have atleast 2 chars in Subject'),
                        check('message').trim().not().isEmpty().isLength({min:10}).withMessage('Must have atleast 10 chars in Message'),
                        ], contactController.postContact);

module.exports = router;