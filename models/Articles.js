const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: Date
  },
  url: {
    type: String,
  }
});

var Articles = mongoose.model('Articles', ArticleSchema);
module.exports = Articles;