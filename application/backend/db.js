const mysql = require('mysql');

// Connect to MySQL DB
const database = mysql.createConnection({
  host: '54.193.62.219',
  port: '3306',
  user: 'user',
  password: 'CampusCantina2021$',
  database: 'campuscantina_test',
});

database.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB!');
});

module.exports = database;
