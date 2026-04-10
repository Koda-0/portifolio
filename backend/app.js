require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT;
const app = express();
const userRoutes = require('./router/userrouter');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);

app.use(express.static(path.join(__dirname, '../')));



// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;