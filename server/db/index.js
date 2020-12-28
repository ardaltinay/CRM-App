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

class Database {

  static getCustomers() {
    mysqlConnection.query('SELECT * FROM customer', function(error, results, fields) {
      if(error) {
        console.log(error.message)
        throw error;
      } else {
        console.log(results)
      }
    });
  }
}

module.exports = Database;

