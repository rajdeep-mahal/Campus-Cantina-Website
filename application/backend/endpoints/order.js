/* Endpoints needed for orders, order history, placing orders, etc */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation

router.use(express.json());

// Testing
router.get('/', (req, res) => {
  res.send('Orders endponts');
});

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

  // Validate data
  if (typeof driverID != 'undefined' && !validator.isInt(driverID)) {
    res.send('Invalid driver ID');
  } else if (
    typeof customerName != 'undefined' &&
    !validator.isAlphanumeric(customerName)
  ) {
    res.send('Invalid customer name');
  } else if (
    typeof restaurantName != 'undefined' &&
    !validator.isAlphanumeric(restaurantName.replace(/\s/g, ''))
  ) {
    res.send('Invalid restaurant name');
  } else {
    // Generate SQL query based on user type
    let query = '';

    if (
      typeof restaurantName === 'undefined' &&
      typeof customerName === 'undefined'
    ) {
      // Driver Orders
      query = `SELECT * FROM Orders WHERE Driver_ID = ` + driverID;
    } else if (
      typeof restaurantName === 'undefined' &&
      typeof driverID === 'undefined'
    ) {
      // Customer Orders
      query =
        `SELECT * FROM Orders WHERE Customer_Name = "` + customerName + `"`;
    } else {
      // Restaurant Orders
      query =
        `SELECT * FROM Orders WHERE Restaurant_Name = "` + restaurantName + `"`;
    }

    // Send orders query to db
    database.query(query, (err, result) => {
      console.log('Got orders from db');
      res.send(result);
    });
  }
});

// Call to change pending order to complete
router.post('/order-completed', (req, res) => {
  console.log('Called order-completed endpoint');
  let orderID = req.query.orderID;

  // Validate data
  if (!validator.isInt(orderID)) {
    res.send('Invalid order ID');
  } else {
    // Generate SQL query
    let query = `UPDATE Orders SET Completed = 1 WHERE ID = ` + orderID;

    // Send order completed query to db
    database.query(query, (err, result) => {
      console.log('Updated order to complete in db');
      res.send(result);
    });
  }
});

// Call to place an order
router.post('/place-order', (req, res) => {
  console.log('Called place-order endpoint');

  // Validate order data
  if (!validator.isInt(req.body.orderID)) {
    res.send('Invalid order ID');
  } else if (!validator.isInt(req.body.restaurantID)) {
    res.send('Invalid restaurant ID');
  } else if (
    !validator.isAlphanumeric(req.body.restaurantName.replace(/\s/g, ''))
  ) {
    res.send('Invalid restaurant name');
  } else if (
    !validator.isAlphanumeric(req.body.restaurantAddress.replace(/\s/g, ''))
  ) {
    res.send('Invalid restaurant address');
  } else if (!validator.isInt(req.body.customerID)) {
    res.send('Invalid customer ID');
  } else if (
    !validator.isAlphanumeric(req.body.customerName.replace(/\s/g, ''))
  ) {
    res.send('Invalid customer name');
  } else if (
    !validator.isAlphanumeric(req.body.deliveryLocation.replace(/\s/g, ''))
  ) {
    res.send('Invalid delivery location');
  } else if (!validator.isFloat(req.body.serviceFee)) {
    res.send('Invalid service fee');
  } else if (!validator.isFloat(req.body.total)) {
    res.send('Invalid total');
  } else if (
    !validator.isAlphanumeric(req.body.deliveryInstructions.replace(/\s/g, ''))
  ) {
    res.send('Invalid delivery instructions');
  } else if (!validator.isInt(req.body.driverID)) {
    res.send('Invalid driver ID');
  } else if (!validator.isInt(req.body.orderSubID)) {
    res.send('Invalid order sub ID');
  } else if (!validator.isFloat(req.body.deliveryFee)) {
    res.send('Invalid delivery fee');
  } else {
    // Generate SQL query with order info
    let query =
      `INSERT INTO Orders VALUES (` +
      req.body.orderID +
      `,'` +
      req.body.restaurantID +
      `','` +
      req.body.restaurantName +
      `','` +
      req.body.restaurantAddress +
      `','` +
      req.body.customerID +
      `','` +
      req.body.customerName +
      `','` +
      req.body.deliveryLocation +
      `','` +
      req.body.orderContents + // Order contents will be stored as stringified JSON
      `','` +
      req.body.serviceFee +
      `','` +
      req.body.total +
      `','` +
      req.body.deliveryInstructions +
      `','` +
      req.body.driverID +
      `',` +
      0 + // Completed set to 0, change to 1 when order complete
      `,` +
      req.body.orderSubID +
      `,` +
      req.body.deliveryFee +
      `)`;

    // Send order query to db
    database.query(query, (err, result) => {
      console.log('Added order to db');
      res.send(result);
    });
  }
});

module.exports = router;
