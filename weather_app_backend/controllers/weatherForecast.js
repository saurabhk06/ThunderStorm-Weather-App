const { OpenWeatherClient, } = require('../utility/axiosInstance');
const { validationResult } = require('express-validator');

/**
 * This method is used to fetch current weather based on the given city id.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns JSON object containing information of the current weather of the city.
 */
exports.getCurrentWeatherByCity = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.errors });
    }
    
    const cityId = req.query.id;
    try {
        const weather = await OpenWeatherClient.get(`/weather?id=${cityId}`);
        return res.status(200).json(weather.data);
    } catch (err) {
        return res.status(400).json({ error: 'Error! Invalid request' })
    }
}

/**
 * This method is used to fetch the weather forecast of the city for 
 * the coming days.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns JSON object containing array list of the forecast information.
 */
exports.getWeatherForecastByCity = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.errors });
    }

    const cityId = req.query.id
    try {
        const weather = await OpenWeatherClient.get(`/forecast?id=${cityId}`);
        return res.status(200).json(weather.data);
    } catch (err) {
        return res.status(400).json({ error: 'Error! Invalid request' })
    }
}