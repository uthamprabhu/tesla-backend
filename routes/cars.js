const express = require('express');
const Car = require('../models/Car'); // Import the Car model
const router = express.Router();

// Route to fetch cars with pagination
router.get('/', async (req, res) => {
    try {
        // Get the page number from query params (default to 1 if not provided)
        const page = parseInt(req.query.page) || 1;
        const limit = 10;  // Number of cars per page (you can change this)
        const skip = (page - 1) * limit;  // Skip based on page number

        // Fetch cars from the database with pagination
        const cars = await Car.find().skip(skip).limit(limit);

        // If no cars found
        if (!cars.length) {
            return res.status(404).json({ message: 'No cars found' });
        }

        // Send the cars as the response
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to fetch a car by ID
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id); // Find the car by ID
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);  // Return the car details
    } catch (err) {
        console.error('Error fetching car:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
