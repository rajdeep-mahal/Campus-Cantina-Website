/* Endpoints needed for SFSU Customers */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator');   // Used for input validation

router.get('/', (req, res) => {
    res.send('SFSU Customer endponts')
})

// API call to get all SFSU customers
router.get('/all-sfsu-customers', (req, res) => {
    database.query('SELECT * FROM SFSU_Customers', (err, result) => {
        console.log('Called all-sfsu-customers endpoint');
        res.send(result);
      });
});

// Customer sign up

// Customer log in

// Get customer order history

// Get customer addresses

module.exports = router;
