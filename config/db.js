const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = process.env.mongoURI;

const connectDB = async () => {
    try {
        mongoose.connect(mongoURI, {
         
          serverSelectionTimeoutMS: 5000, 
        });
      
        const db = mongoose.connection;
      
        db.on('error', (error) => {
          console.error('MongoDB connection error:', error);
        });
      
        db.once('open', () => {
          console.log('Connected to MongoDB');
        });
      } catch (error) {
        console.error('MongoDB connection error:', error.message);
      }
};
module.exports = connectDB;
