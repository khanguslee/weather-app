const openWeatherService = require('./openWeatherApi.service');

function getWeather(cityName) {
  return openWeatherService.getWeather(cityName);
}

module.exports = {
  getWeather,
};
