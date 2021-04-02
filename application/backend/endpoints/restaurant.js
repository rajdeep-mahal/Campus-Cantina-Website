/* Endpoints needed for Restaurant Owners, adding restuarunts,
*  getting menu items, etc. */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator');   // Used for input validation

// Testing
router.get('/', (req, res) => {
    res.send('Restaurant endponts')
})

// API call to get all restaurants
router.get('/all-restaurants', (req, res) => {
    database.query('SELECT * FROM Restaurants', (err, result) => {
        console.log('Called all-restaurants endpoint');
        res.send(result);
      });
});

// Restaurant owner signup

// Restaurant owner login

// Get all restaurant owners

// Get restaurant menu items

// Add restaurant menu item

// Edit menu item (may not be necessary)

// Get restaurant menu

// Get restaurant order history


module.exports = router;
