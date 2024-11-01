
const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', authMiddleware, getUserDetails);

module.exports = router;

console.log('registerUser:', registerUser);
console.log('loginUser:', loginUser);
console.log('getUserDetails:', getUserDetails);

