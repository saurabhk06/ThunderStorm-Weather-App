const axios = require('axios');

exports.OpenWeatherClient = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    timeout: 1000,
    params: {
        appid: '538882fc8387290c6cee83f313a6acf5'
    }
})

