const express = require('express');
const connectDB = require('./config/db'); 
const ProductRouter = require('./routes/product.router'); 
const ReviewRouter = require('./routes/review.router'); 

const app = express();
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Use product routes
app.use("/api/products",ProductRouter);

// Use review routes
app.use("/api/products",ReviewRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
