/* Endpoints needed for getting menu items, adding, deleting, editing. */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation

router.use(express.json());

// Get restaurant menu items
router.get('/restaurant-menu-items', (req, res) => {
  console.log('Called restaurant-menu-items endpoint');
  let restaurantName = req.query.restaurantName;

  // Validate data
  if (!validator.isAlphanumeric(restaurantName.replace(/\s/g, ''))) {
    res.send('Invalid restaurant name');
  } else {
    // Generate SQL query
    let query =
      `SELECT * FROM Menu_Items WHERE Restaurant_Name = "` +
      restaurantName +
      `"`;

    // Send menu items query to db
    database.query(query, (err, result) => {
      console.log('Got resturant menu items from db');
      res.send(result);
    });
  }
});

// Add restaurant menu item
router.post('/add-menu-item', (req, res) => {
  console.log('Called add-menu-item endpoint');

  // Validate menu item info
  if (!validator.isInt(req.body.itemID)) {
    res.send('Invalid item ID');
  } else if (!validator.isInt(req.body.restaurantID)) {
    res.send('Invalid restaurant ID');
  } else if (!validator.isAlphanumeric(req.body.itemName.replace(/\s/g, ''))) {
    res.send('Invalid item name');
    // } else if (
    //   !validator.isAlphanumeric(req.body.itemDescription.replace(/\s/g, ''))
    // ) {
    //   res.send('Invalid item description');
  } else if (!validator.isFloat(req.body.itemPrice)) {
    res.send('Invalid item price');
  } else if (
    !validator.isAlphanumeric(req.body.restaurantName.replace(/\s/g, ''))
  ) {
    res.send('Invalid restaurant name');
  } else {
    // Generate SQL query
    let query =
      `INSERT INTO Menu_Items VALUES (` +
      req.body.itemID +
      `,"` +
      req.body.restaurantID +
      `","` +
      req.body.itemName +
      `","` +
      req.body.itemDescription +
      `","` +
      req.body.itemPrice +
      `","` +
      req.body.restaurantName +
      `")`;

    // Send add menu item query to db
    database.query(query, (err, result) => {
      console.log('Added resturant menu item to db');
      res.send(result);
    });
  }
});

// Delete restaurant menu item
router.delete('/delete-menu-item', (req, res) => {
  console.log('Called delete-menu-item endpoint');

  // Validate data
  if (!validator.isInt(req.query.itemID)) {
    res.send('Invalid item ID');
  } else {
    // Generate SQL query
    let query = `DELETE FROM Menu_Items WHERE ID = ` + req.query.itemID;

    // Send delete menu item query to db
    database.query(query, (err, result) => {
      console.log('Deleted resturant menu item from db');
      res.send(result);
    });
  }
});

// Edit menu item
router.post('/edit-menu-item', (req, res) => {
  console.log('Called edit-menu-item endpoint');

  // Validate data
  if (!validator.isAlphanumeric(req.query.itemName.replace(/\s/g, ''))) {
    res.send('Invalid item name');
    // } else if (
    //   !validator.isAlphanumeric(req.query.itemDescription.replace(/\s/g, ''))
    // ) {
    //   res.send('Invalid item description');
  } else if (!validator.isFloat(req.query.itemPrice)) {
    res.send('Invalid item price');
  } else if (!validator.isInt(req.query.itemID)) {
    res.send('Invalid item ID');
  } else {
    // Generate SQL query
    let query =
      `UPDATE Menu_Items SET Name = "` +
      req.query.itemName +
      `", Description = "` +
      req.query.itemDescription +
      `", Price = ` +
      req.query.itemPrice +
      `WHERE ID = ` +
      req.query.itemID;

    // Send edit menu item query to db
    database.query(query, (err, result) => {
      console.log('Edited resturant menu item on db');
      res.send(result);
    });
  }
});

module.exports = router;
