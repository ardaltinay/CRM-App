const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/customers', apiRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server runnning at port: ${process.env.PORT || 3000}`);
})