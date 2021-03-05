require('dotenv').config();
const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
const router = require('./app/router');

app.use(cors());

//parser JSON 
// app.use(express.json());


const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, function() {
  console.log(`Listening on Port ${port}`);
});