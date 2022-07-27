const express = require('express');
const router = express.Router();
const { query } = require('express-validator');

const { getCurrentWeatherByCity, getWeatherForecastByCity } = require('../controllers/weatherForecast');

router.get('/current-weather', [
    query('id', 'Missing city id').exists(),
    query('id', 'City id cannot be empty').not().isEmpty(),
], getCurrentWeatherByCity);

router.get('/weather-forecast', [
    query('id', 'Missing city id').exists(),
    query('id', 'City id cannot be empty').not().isEmpty(),
], getWeatherForecastByCity);

module.exports = router;