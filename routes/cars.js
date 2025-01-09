const express = require('express');
const Car = require('../models/Car'); // Import the Car model
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();

        if (!cars.length) {
            return res.status(404).json({ message: 'No cars found' });
        }

        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
