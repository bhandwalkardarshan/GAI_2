const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

// User Registration
router.post('/register', UserController.register);

// User Login
router.post('/login', UserController.login);

// Fetch User Details
router.get('/details', AuthMiddleware.verifyToken, UserController.getUserDetails);

// // Filter Users
// router.get('/', AuthMiddleware.verifyToken, UserController.filterUsers);

module.exports = router;
