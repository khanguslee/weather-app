const weatherService = require('../services/weather.service');

function getWeather(req, res, next) {
  const inputCity = req.params.cityName;
  weatherService.getWeather(inputCity).then((data) => {
    res.send(data);
  });
}

module.exports = {
  getWeather,
};
