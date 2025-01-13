const express = require('express');
const Car = require('../models/Car'); 
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;  
        const skip = (page - 1) * limit;

        const cars = await Car.find().skip(skip).limit(limit);

        if (!cars.length) {
            return res.status(404).json({ message: 'No cars found' });
        }

        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id); // Find the car by ID
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (err) {
        console.error('Error fetching car:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
