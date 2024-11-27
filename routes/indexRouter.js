const express = require('express');
const router = express.Router();

// import the mock data
const cars = require('../data/cars');

router.route('/home')
    .get((req, res) => {
        res.render('Homepage/Home',{cars});
    });

module.exports = router;