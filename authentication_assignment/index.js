const express = require('express');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
