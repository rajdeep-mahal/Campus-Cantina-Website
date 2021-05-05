/* Endpoints needed for SFSU Customers */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation
const bcrypt = require('bcryptjs');

router.use(express.json());

// Testing endpoint
router.get('/', (req, res) => {
  res.send('SFSU Customer endponts');
});

// Call to get all SFSU customers for testing
router.get('/all-sfsu-customers', (req, res) => {
  database.query('SELECT * FROM SFSU_Customers', (err, result) => {
    console.log('Called all-sfsu-customers endpoint');
    res.send(result);
  });
});

// Customer sign up
router.post('/customer-signup', (req, res) => {
  console.log('Called customer-singnup endpoint');

  // TODO: Validate driver data

  // Encyprt password
  let hash = bcrypt.hashSync(req.body.customerPassword, 10);

  // Generate SQL query with driver info
  let query =
    `INSERT INTO SFSU_Customers VALUES (` +
    req.body.customerID +
    `,'` +
    req.body.customerName +
    `','` +
    req.body.customerAddress +
    `','` +
    req.body.customerType +
    `','` +
    req.body.customerPhone +
    `','` +
    req.body.customerEmail +
    `','` +
    hash +
    `', 'Active')`; // Status set to active, admin can deactivate

  // Send driver query to db
  database.query(query, (err, result) => {
    console.log('Uploaded customer info to db');
    res.send(result);
  });
});

// Customer log in

module.exports = router;
