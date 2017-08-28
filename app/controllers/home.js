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
    22.8: [3, 2.5, 35],
    22.9: [3, 2.5, 35],
    23: [3, 2.5, 35],
    23.1: [3.5, 3, 35.5],
    23.2: [3.5, 3, 35.5],
    23.3: [3.5, 3, 35.5],
    23.4: [3.5, 3, 35.5],
    23.5: [4, 3.5, 36],
    23.6: [4, 3.5, 36],
    23.7: [4, 3.5, 36],
    23.8: [4.5, 4, 37],
    23.9: [4.5, 4, 37],
    24: [4.5, 4, 37],
    24.1: [5, 4.5, 37.5],
    24.2: [5, 4.5, 37.5],
    24.3: [5, 4.5, 37.5],
    24.4: [5, 4.5, 37.5],
    24.5: [5.5, 5, 38],
    24.6: [5.5, 5, 38],
    24.7: [5.5, 5, 38],
    24.8: [6, 5.5, 38.5],
    24.9: [6, 5.5, 38.5],
    25: [6, 5.5, 38.5],
    25.1: [6.5, 6, 39],
    25.2: [6.5, 6, 39],
    25.3: [6.5, 6, 39],
    25.4: [7, 6.5, 40],
    25.5: [7, 6.5, 40],
    25.6: [7, 6.5, 40],
    25.7: [7.5, 7, 41],
    25.8: [7.5, 7, 41],
    25.9: [7.5, 7, 41],
    26: [8, 7.5, 42],
    26.1: [8, 7.5, 42],
    26.2: [8, 7.5, 42],
    26.3: [8, 7.5, 42],
    26.4: [8, 7.5, 42],
    26.5: [8, 7.5, 42],
    26.6: [8, 7.5, 42],
    26.7: [8.5, 8, 43],
    26.8: [8.5, 8, 43],
    26.9: [8.5, 8, 43],
    27: [8.5, 8, 43],
    27.1: [8.5, 8, 43],
    27.2: [8.5, 8, 43],
    27.3: [10, 9.5, 44],
    27.4: [10, 9.5, 44],
    27.5: [10, 9.5, 44],
    27.6: [10, 9.5, 44],
    27.7: [10, 9.5, 44],
    27.8: [10, 9.5, 44],
    27.9: [11, 10.5, 45],
    28: [11, 10.5, 45],
    28.1: [11, 10.5, 45],
    28.2: [11, 10.5, 45],
    28.3: [11, 10.5, 45],
    28.4: [11, 10.5, 45],
    28.5: [11, 10.5, 45],
    28.6: [12, 11.5, 46.5],
    28.7: [12, 11.5, 46.5],
    28.8: [12, 11.5, 46.5],
    28.9: [12, 11.5, 46.5],
    29: [12, 11.5, 46.5],
    29.1: [12, 11.5, 46.5],
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
