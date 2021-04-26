/* Endpoints needed for Restaurant Owners, adding restuarunts,
 *  getting menu items, etc. */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation
const bcrypt = require('bcryptjs');
const multer = require('multer'); // to process form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });
const imageProcessor = require('./imageProcessor');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Testing
router.get('/', (req, res) => {
  res.send('Restaurant endponts');
});

// Call to get all restaurants for testing
router.get('/all-restaurants', (req, res) => {
  database.query('SELECT * FROM Restaurants', (err, result) => {
    console.log('Called all-restaurants endpoint');
    // Remove images from results
    result.forEach((value) => {
      delete value['Small_Pic'];
      delete value['Large_Pic'];
      // delete value['Banner_Pic'];
    });
    res.send(result);
  });
});

// Call to get all owners for testing
router.get('/all-owners', (req, res) => {
  database.query('SELECT * FROM Restaurant_Owners', (err, result) => {
    console.log('Called all-owners endpoint');
    res.send(result);
  });
});

// Restaurant signup
router.post('/register-restaurant', upload.single('file'), async (req, res) => {
  console.log('Called register-restaurant endpoint');

  let destFilePath = __dirname + '/uploads';
  await imageProcessor(req, destFilePath); // uses sharp to resize

  let Display_Pic_Banner = fs.readFileSync(
    destFilePath + '/Display_Pic_Banner.jpeg'
  );

  let Display_Pic_Thumbnail = fs.readFileSync(
    destFilePath + '/Display_Pic_Thumbnail.jpeg'
  );

  let thumbnail = Display_Pic_Thumbnail.toString('base64');
  let banner = Display_Pic_Banner.toString('base64');

  // TODO: Perform validation on data

  // Generate SQL query with restaurant info
  let query =
    `INSERT INTO Restaurants VALUES (` +
    req.body.restaurantID +
    `,'` +
    req.body.restaurantName +
    `','` +
    req.body.restaurantCuisine +
    `','` +
    req.body.restaurantTags +
    `','` +
    req.body.restaurantPriceLevel +
    `','` +
    req.body.restaurantAddress +
    `','` +
    thumbnail +
    `',37.7301,-122.477,'` +
    banner +
    `', 1)`;

  // Send restaurant query to db
  database.query(query, (err, result) => {
    if (err) throw err;
    console.log('Uploaded restaurant info to db');
    res.send(result);
  });
});

// Restaurant owner signup
router.post('/register-owner', (req, res) => {
  console.log('Called register-owner endpoint');
  let data = JSON.parse(req.body.params.formdata);

  // TODO: Perform validation on data

  // Encyprt password
  let hash = bcrypt.hashSync(data.ownerPassword, 10);

  // Generate SQL query with owner info
  let query =
    `INSERT INTO Restaurant_Owners VALUES (` +
    data.ownerID +
    `,'` +
    data.ownerName +
    `','` +
    data.ownerContactNumber +
    `','` +
    data.ownerEmail +
    `','` +
    hash +
    `','` +
    data.ownerRestaurant +
    `')`;

  // Send owner query to db
  database.query(query, (err, result) => {
    console.log('Uploaded owner info to db');
    res.send(result);
  });
});

// Restaurant owner login

// Get restaurant menu items

// Add restaurant menu item

// Edit menu item (may not be necessary)

// Get restaurant menu

// Get restaurant order history

module.exports = router;
