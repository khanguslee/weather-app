// TODO: Grab from environment variable if set
// eslint-disable-next-line
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/weather-app';

module.exports = {
  MONGODB_URI,
};
