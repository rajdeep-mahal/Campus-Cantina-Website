/* Endpoints needed for orders, order history, placing orders, etc */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator');   // Used for input validation

// Testing
router.get('/', (req, res) => {
    res.send('Orders endponts')
})

// API call to get all orders
router.get('/all-orders', (req, res) => {
    database.query('SELECT * FROM Orders', (err, result) => {
        console.log('Called all-orders endpoint');
        res.send(result);
      });
});

// Place order

module.exports = router; 
