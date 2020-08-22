const axios = require('axios');
require('dotenv').config();

const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

function getWeather(cityName) {
  const forecastURL = `${OPEN_WEATHER_BASE_URL}/weather?q=${cityName}&mode=json&APPID=${API_KEY}`;
  return axios
    .get(forecastURL)
    .then((response) => {
      const { data } = response;

      // Get rain in past hour
      const rainValue = data.rain ? data.rain['1h'] : null;

      // Output necessary data
      const outputData = {
        city: data.name,
        country: data.sys.country,
        rain: rainValue,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind: data.wind,
        weather: data.weather[0],
      };
      return outputData;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

module.exports = {
  getWeather,
};
