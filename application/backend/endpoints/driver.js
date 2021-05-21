/* Endpoints needed for driver signup and dashboard */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation
const bcrypt = require('bcryptjs');

router.use(express.json());

// Testing
router.get('/', (req, res) => {
  res.send('Drivers endponts');
});

// API call to get all drivers for testing
router.get('/all-drivers', (req, res) => {
  database.query('SELECT * FROM Drivers', (err, result) => {
    console.log('Called all-drivers endpoint');
    res.send(result);
  });
});

// Driver signup
router.post('/driver-signup', (req, res) => {
  console.log('Called driver-signup endpoint');

  // Validate driver data
  if (!validator.isInt(req.body.driverID)) {
    res.send('Invalid driver ID');
  }
  // else if (!validator.isAlphanumeric(req.body.driverName)) {
  //   res.send('Invalid driver name');
  // }
  else if (!validator.isInt(req.body.driverPhone)) {
    res.send('Invalid driver phone number');
  } else if (!validator.isEmail(req.body.driverEmail)) {
    res.send('Invalid driver email');
  } else if (
    !validator.isAlphanumeric(req.body.driverRestaurant.replace(/\s/g, ''))
  ) {
    res.send('Invalid driver restaurant');
  } else {
    // Encyprt password
    let hash = bcrypt.hashSync(req.body.driverPassword, 10);

    // Generate SQL query with driver info
    let query =
      `INSERT INTO Drivers VALUES (` +
      req.body.driverID +
      `,"` +
      req.body.driverName +
      `","` +
      req.body.driverPhone +
      `","` +
      req.body.driverEmail +
      `","` +
      hash +
      `","` +
      req.body.driverRestaurant +
      `")`;

    // Send driver query to db
    database.query(query, (err, result) => {
      console.log('Uploaded driver info to db');
      res.send(result);
    });
  }
});

// Get individual driver info
router.get('/driver-info', (req, res) => {
  console.log('Called driver-info endpoint');

  // Validate email
  if (!validator.isEmail(req.query.driverEmail)) {
    res.send('Invalid driver email');
  } else {
    // Generate SQL query
    let query =
      `SELECT * FROM Drivers WHERE Email = "` + req.query.driverEmail + `"`;

    // Send driver info query to db
    database.query(query, (err, result) => {
      console.log('Got individual driver info from db');
      res.send(result);
    });
  }
});

module.exports = router;
