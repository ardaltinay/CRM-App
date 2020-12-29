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

  static addCustomer(name, surname, email, phone, job, address) {
    let query = `INSERT INTO customer (first_name, last_name, email, mobile_phone, job_title, address) VALUES (?,?,?,?,?,?)`;
    let values = [name, surname, email, phone, job, address];
    mysqlConnection.query(query, values, function(error, results, fields) {
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

