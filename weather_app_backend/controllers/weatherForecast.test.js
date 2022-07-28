const { getCurrentWeatherByCity, getWeatherForecastByCity } = require('./weatherForecast');

// mock request
const request = {
    query: {
        id: 6167865
    }
}

//mock response
const response = { status: jest.fn().mockReturnThis(), json: jest.fn() };

test('check getCurrentWeatherByCity api giving success response', async () => {
    await getCurrentWeatherByCity(request, response);
    expect(response.status).toBeCalledWith(200);
});

test('check getWeatherForecastByCity api giving success response', async () => {
    await getWeatherForecastByCity(request, response);
    expect(response.status).toBeCalledWith(200);
})