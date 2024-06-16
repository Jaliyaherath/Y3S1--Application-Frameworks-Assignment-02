//Importing required modules
const router = require('express').Router();
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);//hashing the password
        const newUser = new User({ username, password: hashedPassword });//creating a new user
        await newUser.save();//saving the new user
        res.status(201).json({ message: "User registered successfully!" });//sending a success message
    } catch (error) {
        res.status(500).json(error);//sending an error message
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;//getting the username and password from the request body
        const user = await User.findOne({ username });//finding the user by the username
        if (!user) return res.status(404).json({ message: "User not found" });//if the user is not found, send a message

        const isMatch = await bcrypt.compare(password, user.password);//comparing the password
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });//if the password is incorrect, send a message

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });//creating a token
        res.json({ token, username });
        } catch (error) {
        res.status(500).json(error);
        }
    });
        
// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
