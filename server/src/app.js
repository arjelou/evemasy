const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const singupRoutes = require('./routes/signup/signup.route');
const loginRoutes = require('./routes/login/login.route');


const app = express();

app.use(cors({origin: ['http://localhost:3000']}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/user', singupRoutes);
app.use('/api/user', loginRoutes);


module.exports = app;

