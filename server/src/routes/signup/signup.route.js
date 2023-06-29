const express = require('express');
// const { check } = require('express-validator');

const useController = require("./signup.controller");

const router = express.Router();

router.post('/signup',useController.signup);

module.exports = router;