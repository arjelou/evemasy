const express = require('express');
const bodyParser = require('body-parser');

const singupRoutes = require('./routes/signup/signup.route');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/user', singupRoutes);

module.exports = app;

