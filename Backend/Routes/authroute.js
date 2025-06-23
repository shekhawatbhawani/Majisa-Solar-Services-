const express = require('express');
const router = express.Router();
const { signup, login , getUser} = require('../Controllers/authController');

// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

router.get('/getUser',getUser)

module.exports = router;
