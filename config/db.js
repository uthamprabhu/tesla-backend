const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://utham:12345@teslacardataset.zjq3c.mongodb.net/teslaDB?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
