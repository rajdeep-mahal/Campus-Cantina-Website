const mysql = require('mysql');
const express = require('express');
const cors = require('cors')
const app = express();
port = 3001;

app.use(cors())

const database = mysql.createConnection({
    host: '54.219.159.229',
    port: '3306',
    user: 'user',
    password: 'CampusCantina2021$',
    database: 'campuscantina_test'
});

database.connect((err) => {
    if (err) throw err;
    console.log('Connected to DB!');
});

app.get('/cuisines', (req, res) => {
    database.query('SELECT * FROM Food_Cuisines', (err, result) => {
        console.log('Called cuisines endpoint');
        res.send(result);
    });
});

app.get('/search', (req, res) => {
    let searchTerm = req.query.searchTerm;
    let cuisine = req.query.cuisine;

    let query = 'SELECT * FROM Restaurants';

    if (searchTerm != '' && cuisine != '') {
        query = `SELECT * FROM Restaurants WHERE Cuisine = '` + cuisine + `' AND ( Name LIKE '%` + searchTerm + `%' OR Tags LIKE '%` + searchTerm + `%' OR Cuisine LIKE '%` + searchTerm + `%')`;
    } 
    else if (searchTerm != '' && cuisine == '' ) {
        query = `SELECT * FROM Restaurants WHERE Name LIKE '%` + searchTerm + `%' OR Tags LIKE '%` + searchTerm + `%' OR Cuisine LIKE '%` + searchTerm + `%'`;
    }
    else if (searchTerm == '' && cuisine != '') {
        query = `SELECT * FROM Restaurants WHERE Cuisine = '` + cuisine + `'`;
    }

    database.query(query, (err, result) => {
        console.log('Called search endpoint');
        res.send(result);
    });
});

app.listen(port, () => console.log(`Backend server on port ${port}!`));
