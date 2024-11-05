const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth'); 

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);


router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: 'This is your profile', user: req.user });
});

module.exports = router;
