const mongoose = require('mongoose');

const searchSchemaOptions = {
  timestamps: true,
};

const searchSchema = mongoose.Schema(
  {
    term: { type: String, required: true },
  },
  searchSchemaOptions
);

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
