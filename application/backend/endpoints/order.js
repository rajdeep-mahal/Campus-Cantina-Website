/* Endpoints needed for orders, order history, placing orders, etc */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator');   // Used for input validation

// Testing
router.get('/', (req, res) => {
    res.send('Orders endponts')
})

// Call to get all orders for testing
router.get('/all-orders', (req, res) => {
    database.query('SELECT * FROM Orders', (err, result) => {
        console.log('Called all-orders endpoint');
        res.send(result);
      });
});

// Call to orders by user type
router.get('/user-orders', (req, res) => {
    console.log('Called user-orders endpoint');

    let restaurantName = req.query.restaurantName;
    let customerName = req.query.customerName;
    let driverID = req.query.driverID;

    let query = '';

    // Generate SQL query based on user type
    if (typeof restaurantName === 'undefined' && typeof customerName === 'undefined') {
        // Driver Orders
        query = `SELECT * FROM Orders WHERE Driver_ID = ` + driverID;            
    } else if (typeof restaurantName === 'undefined' && typeof driverID === 'undefined') {
        // Customer Orders
        query = `SELECT * FROM Orders WHERE Customer_Name = '` + customerName + `'`;
    } else {
        // Restaurant Orders
        query = `SELECT * FROM Orders WHERE Restaurant_Name = '` + restaurantName + `'`;
    }
    
    database.query(query, (err, result) => {
        console.log('Got orders from db');
        res.send(result);
      });
});

module.exports = router; 
