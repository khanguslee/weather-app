const weatherRouter = require('express').Router();

weatherRouter.get('/:cityName', (req, res) => {
  const inputCity = req.params.cityName;
  res.send(`${inputCity} was submitted`);
});

module.exports = weatherRouter;
