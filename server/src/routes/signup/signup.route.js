const express = require('express');
const { check } = require('express-validator');

const useController = require("./signup.controller");

const router = express.Router();

router.post('/signup',[
    check('fullname').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })
],
useController.signup);

module.exports = router;