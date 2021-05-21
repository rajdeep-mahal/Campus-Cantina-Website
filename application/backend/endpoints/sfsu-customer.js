/* Endpoints needed for sfsu customers */

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

  // Validate data
  if (!validator.isInt(req.body.customerID)) {
    res.send('Invalid customer ID');
    // }
    // else if (
    //   !validator.isAlphanumeric(req.body.customerName.replace(/\s/g, ''))
    // ) {
    //   res.send('Invalid customer name');
    // else if (
    //   !validator.isAlphanumeric(req.body.customerAddress.replace(/\s/g, ''))
    // ) {
    //   res.send('Invalid customer address');
  } else if (
    !validator.isAlphanumeric(req.body.customerType.replace(/\s/g, ''))
  ) {
    res.send('Invalid customer type');
  } else if (!validator.isInt(req.body.customerPhone)) {
    res.send('Invalid customer phone');
  } else if (!validator.isEmail(req.body.customerEmail)) {
    res.send('Invalid customer email');
  } else {
    // Encyprt password
    let hash = bcrypt.hashSync(req.body.customerPassword, 10);

    // Generate SQL query with driver info
    let query =
      `INSERT INTO SFSU_Customers VALUES (` +
      req.body.customerID +
      `,"` +
      req.body.customerName +
      `","` +
      req.body.customerAddress +
      `","` +
      req.body.customerType +
      `","` +
      req.body.customerPhone +
      `","` +
      req.body.customerEmail +
      `","` +
      hash +
      `", "Active")`; // Status set to active, admin can deactivate

    // Send driver query to db
    database.query(query, (err, result) => {
      console.log(query);
      console.log('Uploaded customer info to db');
      res.send(result);
    });
  }
});

// Get individual sfsu customer info
router.get('/customer-info', (req, res) => {
  console.log('Called customer-info endpoint');

  // Validate data
  if (!validator.isEmail(req.query.customerEmail)) {
    res.send('Invalid customer email');
  } else {
    // Generate SQL query
    let query =
      `SELECT * FROM SFSU_Customers WHERE Email = "` +
      req.query.customerEmail +
      `"`;

    // Send customer info query to db
    database.query(query, (err, result) => {
      console.log('Got individual customer info from db');
      res.send(result);
    });
  }
});

module.exports = router;
