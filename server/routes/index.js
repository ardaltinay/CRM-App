const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', async (req,res,next) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let phone = req.body.phone;
  let job = req.body.job;
  let address = req.body.address;

  try {
    let results = await db.addCustomer(name, surname, email, phone, job, address);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;