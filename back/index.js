require('dotenv').config();
const express = require("express");

const cors = require('cors');
const app = express();
const router = require('./app/router');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
//parser JSON 
// app.use(express.json());

//parse cookies sent via http requests
app.use(cookieParser()) 

//use cors to accept other non domain websites to access api
app.use(cors());

// use JWT auth to secure the api
// const jwt = require('./app/authentification/jwt');
// app.use(jwt());

// global error handler
// const errorHandler = require('./app/authentification/error-handler');
// app.use(errorHandler);

const port = process.env.PORT || 3000;

app.use(router);
// routerApi.use(jwt({ secret: "secret" }))
// app.use(routerAdmin);

app.listen(port, function() {
  console.log(`Listening on Port ${port}`);
});