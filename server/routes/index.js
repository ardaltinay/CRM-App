const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', async (req,res,next) => {
  let name = req.query.name;
  let surname = req.query.surname;
  let email = req.query.email;
  console.log(name, surname, email);

  try {
    let results = await db.addCustomer(name, surname, email);
    res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router;