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

app.use(cors({
    origin: [
      'http://localhost:3000',
      'https://unsp-tesla.netlify.app',
    ],
    methods: ['GET', 'POST'],
    credentials: true
  }));
  
  const io = socketio(server, {
    cors: {
      origin: [
        'http://localhost:3000',
        'https://unsp-tesla.netlify.app',
      ],
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

// Use the cars routes
app.use('/cars', carsRoute);

// Home route
app.get('/', (req, res) => {
    res.send('The server is running!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
