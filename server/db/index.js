const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'Ar22.02da',
  database: 'nodejs'
});

let nodejsDb = {};

nodejsDb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM nodejs', (err, result) => {
      if(err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

module.exports = nodejsDb;