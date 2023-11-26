const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
