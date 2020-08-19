const weatherRouter = require('express').Router();

const weatherController = require('../../controllers/weather.controller');

weatherRouter.get('/:cityName', weatherController.getWeather);

module.exports = weatherRouter;
