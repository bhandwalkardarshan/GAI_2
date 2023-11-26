const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config()
const JWT_SECRET  = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

const UserController = {
  register: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        mobile,
        password,
        role,
        status,
      } = req.body;

      // Validate input fields
      if (!first_name || !last_name || !email || !mobile || !password || !role || !status) {
        return res.status(400).json({ status: 400, message: 'All fields are mandatory' });
      }

      // Check for duplicate email and mobile
      const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
      if (existingUser) {
        return res.status(409).json({ status: 409, message: 'Duplicate email or mobile number' });
      }

      // Validate password
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          status: 400,
          message:
            'Password must be at least 8 characters long and contain at least one special character, one uppercase letter, and one digit',
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        first_name,
        last_name,
        email,
        mobile,
        password: hashedPassword,
        role,
        status,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(200).json({ status: 200, message: 'Account successfully created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password, role } = req.body;

      // Validate input fields
      if (!email || !password || !role) {
        return res.status(400).json({ status: 400, message: 'All fields are mandatory' });
      }

      // Check if the user exists
      const user = await User.findOne({ email, role });
      if (!user) {
        return res.status(404).json({ status: 404, message: 'User not found' });
      }

      // Validate the password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ status: 401, message: 'Invalid password' });
      }

      // Create and sign a JWT token
      const token = jwt.sign(
        {
          id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
          status: user.status,
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
      );

      return res.status(200).json({
        status: 200,
        message: 'Logged in successfully',
        data: {
          userDetails: {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
            status: user.status,
          },
          token,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  },

  getUserDetails: async (req, res) => {
    try {
      const { id, first_name, last_name, email, mobile, role, status } = req.user;

      return res.status(200).json({
        status: 200,
        data: { id, first_name, last_name, email, mobile, role, status },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  }
};

module.exports = UserController;
