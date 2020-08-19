const weatherRoute = require('./weather');

module.exports = function routes(app) {
  app.use('/weather', weatherRoute);
};
