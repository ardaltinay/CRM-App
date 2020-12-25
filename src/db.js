let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ar22.02da",
  database: "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});