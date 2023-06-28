const express = require('express');
const bodyParser = require('body-parser');

const singupRoutes = require('./routes/signup/signup.route');
const loginRoutes = require('./routes/login/login.route');


const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/user', singupRoutes);
app.use('/api/user', loginRoutes);


module.exports = app;

