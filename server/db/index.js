const mysql = require('mysql');

let mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ar22.02da',
  database: 'nodejs',
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if(err) {
    console.log("Connection failed");
  } else {
    console.log("Connected");
  }
});

module.exports = mysqlConnection;

