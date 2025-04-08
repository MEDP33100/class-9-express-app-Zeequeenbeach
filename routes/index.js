var express = require('express');
var router = express.Router();

const items = require('../data/fortune.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  const randomItem = items[Math.floor(Math.random() * items.length)];

  res.render('index', {
    title: 'Fortune Generator',
    content: randomItem.text
  });
});

module.exports = router;
