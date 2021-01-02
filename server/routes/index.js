const mysqlConnection = require('../db')
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    mysqlConnection.query('SELECT * FROM customer', function (error, results, fields) {
      if (error) {
        console.log(error.message);
        throw error;
      } else {
        console.log(results);
        res.send(results);
      }     
    })
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

router.post('/', (req,res,next) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let phone = req.body.phone;
  let job = req.body.job;
  let address = req.body.address;
  try {
    let query = `INSERT INTO customer (first_name, last_name, email, mobile_phone, job_title, address) VALUES (?,?,?,?,?,?)`;
    let values = [name, surname, email, phone, job, address];
    mysqlConnection.query(query, values, function(error, results, fields) {
      if(error) {
        console.log(error.message)
        throw error;
      } else {
        console.log(results);
        res.send(results);
      } 
    })
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

router.delete('/:id', (req,res,next) => {
  let _id = req.params.id;
  try {
    let query = `DELETE FROM customer WHERE id=?`;
    mysqlConnection.query(query, _id, function(error, results) {
      if(error) {
        console.log(error.message)
        throw error;
      } else {
        console.log(results);
        res.send(results);
      } 
    })
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;