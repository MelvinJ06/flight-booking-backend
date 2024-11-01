// backend/routes/userRoutes.js

const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in an existing user
router.post('/login', loginUser);

// Route to get user details (protected)
router.get('/profile', authMiddleware, getUserDetails);

module.exports = router;

console.log('registerUser:', registerUser);
console.log('loginUser:', loginUser);
console.log('getUserDetails:', getUserDetails);

