const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const config = require('../config/database');

exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create a new user instance
      user = new User({ name, email, password });
  
      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }
  
      // Validate the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }
  
      // Create and sign the JWT
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      jwt.sign(payload, config.secret, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
