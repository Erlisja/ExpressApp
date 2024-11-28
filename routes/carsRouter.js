const express = require('express');
const router = express.Router();

// Load the cars data
const cars = require('../data/cars');



router.route ('/carsDatabase')
.get( (req, res) => {
    res.render('System/CarsDatabase', { cars });
});

// Add a new car to the cars array
    router.route('/carsDatabase')
    .post((req, res) => {
        // Add a new car to the cars array
    const newCar = {
        id: cars.length + 1, // Assign a new ID
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price
    };
    cars.push(newCar);
    res.render('System/CarsDatabase', { cars });
    res.status(201).json(newCar); // Respond with the newly added car
});


module.exports = router;