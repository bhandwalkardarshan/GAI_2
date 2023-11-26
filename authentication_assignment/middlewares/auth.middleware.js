const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const AuthMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.header('Authorization');
console.log(token)
    if (!token) {
      return res.status(401).json({ status: 401, message: 'Unauthorized - Missing token' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ status: 401, message: 'Unauthorized - Invalid token' });
    }
  },
};

module.exports = AuthMiddleware;
