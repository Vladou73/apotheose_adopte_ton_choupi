require('dotenv').config();
const express = require("express");
const app = express();
const router = require('./app/router');
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, function() {
  console.log(`Listening on Port ${port}`);
});