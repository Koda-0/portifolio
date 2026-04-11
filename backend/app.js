require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const userRoutes = require('../backend/router/userrouter');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the backend server 🚀");
});

module.exports = app;