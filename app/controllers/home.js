var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  app.use('/', router);
  app.use('/item', router);
  app.use('/size', router);
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

router.post('/size', function (req, res, next) {
  var mySizes = {
    "22.8, 22.9, 23": [3, 2.5, 35],
    "23.1, 23.2, 23.3, 23.4": [3.5, 3, 35.5],
    "23.5, 23.6, 23.7": [4, 3.5, 36],
    "23.8, 23.9, 24": [4.5, 4, 37],
    "24.1, 24.2, 24.3, 24.4": [5, 4.5, 37.5],
    "24.5, 24.6, 24.7": [5.5, 5, 38],
    "24.8, 24.9, 25": [6, 5.5, 38.5],
    "25.1, 25.2, 25.3": [6.5, 6, 39],
    "25.4, 25.5, 25.6": [7, 6.5, 40],
    "25.7, 25.8, 25.9": [7.5, 7, 41],
    "26, 26.1, 26.2, 26.3, 26.4, 26.5, 26.6": [8, 7.5, 42],
    "26.7, 26.8, 26.9, 27, 27.1, 27.2": [8.5, 8, 43],
    "27.3, 27.4, 27.5, 27.6, 27.7, 27.8": [10, 9.5, 44],
    "27.9, 28, 28.1, 28.2, 28.3, 28.4, 28.5": [11, 10.5, 45],
    "28.6, 28.7, 28.8, 28.9, 29, 29.1": [12, 11.5, 46.5],
    29.2: [13.5, 13, 48.5]
  };

  if (req.body && req.body.size) {
    if (mySizes[req.body.size]) {
      res.send(mySizes[req.body.size]);
    } else {
      res.status(204).send();
    }
  } else {
    res.status(403).send({});
  }
});

router.post('/phone', function (req, res, next) {
  if (req.body && req.body.phone) {
    res.status(204).send();
  } else {
    res.status(403).send({});
  }
});
