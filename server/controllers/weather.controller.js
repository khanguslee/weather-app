const weatherService = require('../services/weather.service');
const searchModel = require('../models/search');

function getWeather(req, res, next) {
  const inputCity = req.params.cityName;
  // Store search term
  searchModel.create({ term: inputCity });

  // Get weather data
  weatherService.getWeather(inputCity).then((data) => {
    res.send(data);
  });
}

module.exports = {
  getWeather,
};
