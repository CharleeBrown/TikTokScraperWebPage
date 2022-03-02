var express = require('express');
var router = express.Router();
var tito = require('tiktok-scraper');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 tito.user('', function(err,next));
});

module.exports = router;
