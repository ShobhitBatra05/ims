const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
exports.registerUser = async (req, res) => {

    const { name, email, password, role, address, phone } = req.body;
    console.log(req.body)

    // Check required fields based on role
    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "Name, email, password, and role are required." });
    }

    if (role === 'Supplier' && (!address || !phone)) {
        console.log(address,phone)
        console.log("why")
        return res.status(400).json({ message: "Address and Phone no. are required for suppliers." });
    }

 

    try {

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword, role,...(role === 'Supplier' && { address, phone }), }); // Include address and phone if supplier

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: `Registration failed ${error.message} ` });
    }
};



// Login a user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {       
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
          
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Wrong Password' });
        }

        // Generate a token
        console.log(user)
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            user: {
              id: user._id,
              name: user.name,
              role: user.role,
              email: user.email
            },
        });
    } catch (error) {
        res.status(500).json({ error: `Login failed ${error.message}` });
    }
};