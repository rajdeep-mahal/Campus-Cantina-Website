/* Endpoints needed for app users */

const express = require('express');
const database = require('../db');
const router = express.Router();

router.use(express.json());

let appUser = new Object();

// Customer log in
router.get('/customer-login', (req, res) => {
  console.log('Called customer-login endpoint');
  appUser.type = req.query.appUserType;

  // Generate SQL query
  let query =
    `SELECT * FROM SFSU_Customers WHERE Email = '` +
    req.query.appUserEmail +
    `'`;

  // Get customer info from db
  database.query(query, (err, result) => {
    appUser.email = result[0].Email;
    appUser.name = result[0].Name;
    console.log(appUser);
    res.send(appUser);
  });
});

// Owner log in
router.get('/owner-login', (req, res) => {
  console.log('Called owner-login endpoint');
  appUser.type = req.query.appUserType;

  // Generate SQL query
  let query =
    `SELECT * FROM Restaurant_Owners WHERE Email = '` +
    req.query.appUserEmail +
    `'`;

  // Get owner info from db
  database.query(query, (err, result) => {
    appUser.email = result[0].Email;
    appUser.name = result[0].Name;
    console.log(appUser);
    res.send(appUser);
  });
});

// Driver log in
router.get('/driver-login', (req, res) => {
  console.log('Called driver-login endpoint');
  appUser.type = req.query.appUserType;

  // Generate SQL query
  let query =
    `SELECT * FROM Drivers WHERE Email = '` + req.query.appUserEmail + `'`;

  // Send driver info from db
  database.query(query, (err, result) => {
    appUser.email = result[0].Email;
    appUser.name = result[0].Name;
    console.log(appUser);
    res.send(appUser);
  });
});

// Get app user
router.get('/get-appuser', (req, res) => {
  console.log('Called get-appuser endpoint');
  res.send(appUser);
});

module.exports = router;
