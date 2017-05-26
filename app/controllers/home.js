var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
  app.use('/item', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'КАЛЕНДАРЬ СОРЕВНОВАНИЙ',
      articles: articles
    });
  });
});

router.get('/item', function (req, res, next) {
    res.render('item', {
      title: 'КАЛЕНДАРЬ СТАРТОВ'
    });
});
