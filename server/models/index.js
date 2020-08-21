const mongoose = require('mongoose');

const Search = require('./search');

const config = require('../config');

const mongooseOptions = { useNewUrlParser: true };
const connectDb = () => mongoose.connect(config.MONGODB_URI, mongooseOptions);

const models = { Search };
module.exports = { models, connectDb };
