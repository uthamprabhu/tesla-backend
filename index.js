const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db');
const carsRoute = require('./routes/cars'); // Import car routes
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use(cors())

// Use the cars routes
app.use('/cars', carsRoute);

// Home route
app.get('/', (req, res) => {
    res.send('Hello world');
    console.log('Hello world');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
