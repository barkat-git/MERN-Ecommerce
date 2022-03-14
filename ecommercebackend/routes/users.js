const express = require('express');
const { registerUser } = require('../controllers/users');
const app = require('../app');

const router = express.Router();

router.route('/').post(registerUser);
module.exports = router;
