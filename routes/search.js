var express = require('express');
var router = express.Router();
var tito = require('tiktok-scraper');
/* GET users listing. */
router.post('/music', function(req, res, next) {
  //res.send('respond with a resource');
   //tito.getMusicInfo(req.body.musicSearch)
   var searchOption = document.getElementById("searchOption");
   if(searchOption.value == "Music"){
	console.log("hello");
   }
   
});

module.exports = router;
