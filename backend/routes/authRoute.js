var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
require('dotenv').config(); // automatically loads environment variables from a . env file into the process.

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;