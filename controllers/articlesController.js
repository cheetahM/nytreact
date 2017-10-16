var Article = require('../models/article');
module.exports = {
  // This method handles retrieving articles from the db
  index: function(req, res) {
    Article.find()
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new articles
  create: function(req, res) {
    let article = {};
    article.title = req.body.article.headline.main;
    article.snippet = req.body.article.snippet;
    article.web_url = req.body.article.web_url;

    console.log(req.body.article.web_url);
    const entry = new Article(article);

    entry
      .save(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  // This method handles deleting articles
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    })
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
