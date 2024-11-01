

const User = require('../models/User');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.create({ email, password });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); 
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserDetails,
};
