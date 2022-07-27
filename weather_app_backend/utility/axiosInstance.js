const axios = require('axios');

exports.OpenWeatherClient = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    timeout: 1000,
    params: {
        appid: process.env.OPEN_WEATHER_MAP_API_KEY
    }
})

