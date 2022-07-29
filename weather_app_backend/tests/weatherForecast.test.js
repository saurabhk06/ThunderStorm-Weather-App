const { getCurrentWeatherByCity, getWeatherForecastByCity } = require('../controllers/weatherForecast');

// mock request
const request = {
    query: {
        id: 6167865
    }
}

//mock response
const response = { status: jest.fn().mockReturnThis(), json: jest.fn() };

/**
 * This test case is used to check getCurrentWeatherByCity api for success or failed response
 */
test('check getCurrentWeatherByCity api giving success response', async () => {
    await getCurrentWeatherByCity(request, response);
    expect(response.status).toBeCalledWith(200);
});

/**
 * This test case is used to check getWeatherForecastByCity api for success or failed response
 */
test('check getWeatherForecastByCity api giving success response', async () => {
    await getWeatherForecastByCity(request, response);
    expect(response.status).toBeCalledWith(200);
})