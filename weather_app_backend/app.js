require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

//Routes
const weatherForecastRoutes = require('./routes/weatherForecast');

//Built-in and third party middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', weatherForecastRoutes);

//Port
const port = 4000;

app.listen(port, () => {
    console.log('Server is listening')
});