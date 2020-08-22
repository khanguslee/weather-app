const weatherService = require('../services/weather.service');
const searchModel = require('../models/search');

function getWeather(req, res, next) {
  const inputCity = req.params.cityName;
  // Store search term
  searchModel.create({ term: inputCity });

  // Get weather data
  weatherService
    .getWeather(inputCity)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({
        error: error.toString(),
        message: `Error finding weather for ${inputCity}`,
      });
    });
}

module.exports = {
  getWeather,
};
