/* Endpoints needed for Driver login and dashboard */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator');   // Used for input validation

// Testing
router.get('/', (req, res) => {
    res.send('Drivers endponts')
})

// API call to get all drivers
router.get('/all-drivers', (req, res) => {
    database.query('SELECT * FROM Drivers', (err, result) => {
        console.log('Called all-drivers endpoint');
        res.send(result);
      });
});

// Driver signup

// Driver login

// Get driver pending orders

// Get driver order history

module.exports = router;
