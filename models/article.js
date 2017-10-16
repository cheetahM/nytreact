const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  snippet: String,
  web_url: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
