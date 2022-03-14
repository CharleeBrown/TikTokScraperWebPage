var express = require('express');
var router = express.Router();
var tito = require('tiktok-scraper');
/* GET home page. */
router.get('/', function(req, res, next) {
  tito.getUserProfileInfo('*');
  res.render('index', { title: 'Express' });

});

module.exports = router;
