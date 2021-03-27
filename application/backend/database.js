const mysql = require('mysql');
const express = require('express');
const cors = require('cors');             // Used for cross-origin requests
const app = express();
const validator = require('validator');   // Used for input validation

port = 3001;

app.use(cors());

// Connect to MySQL DB
const database = mysql.createConnection({
  host: '54.219.159.229',
  port: '3306',
  user: 'user',
  password: 'CampusCantina2021$',
  database: 'campuscantina_test',
});

database.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB!');
});

// API call to populate cuisines drop-down list
app.get('/api/cuisines', (req, res) => {
  database.query('SELECT * FROM Food_Cuisines', (err, result) => {
    console.log('Called cuisines endpoint');
    res.send(result);
  });
});

// API call to search database
app.get('/api/search', (req, res) => {
  let searchTerm = req.query.searchTerm;

  // Check if search input is alphanumeric and less than 40 characters, or empty
  if (
    (validator.isLength(searchTerm, { max: 40 }) &&
      validator.isAlphanumeric(searchTerm)) ||
    searchTerm === ''
  ) {
    
    let cuisine = req.query.cuisine;
    let query = 'SELECT * FROM Restaurants';

    if (searchTerm != '' && cuisine != '') {             // When search term is not empty and cusine type selected     
      query =
        `SELECT * FROM Restaurants WHERE Cuisine = '` +
        cuisine +
        `' AND ( Name LIKE '%` +
        searchTerm +
        `%' OR Tags LIKE '%` +
        searchTerm +
        `%' OR Cuisine LIKE '%` +
        searchTerm +
        `%')`;
    } else if (searchTerm != '' && cuisine == '') {     // When search term is not empty no cuisine type selected
      query =
        `SELECT * FROM Restaurants WHERE Name LIKE '%` +
        searchTerm +
        `%' OR Tags LIKE '%` +
        searchTerm +
        `%' OR Cuisine LIKE '%` +
        searchTerm +
        `%'`;
    } else if (searchTerm == '' && cuisine != '') {    // When search term is empty and cuisine type selected
      query = `SELECT * FROM Restaurants WHERE Cuisine = '` + cuisine + `'`;
    }

    database.query(query, (err, result) => {
      console.log('Called search endpoint');
      res.send(result);
    });
  } else {     
    // Send invalid as response when search term vaidation fails           
    res.send('Invalid');                              
  }
});

app.listen(port, () => console.log(`Backend server on port ${port}!`));
