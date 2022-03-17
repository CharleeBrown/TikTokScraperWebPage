var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });

});

router.post('/music', function(req, res, next) {
 
   //tito.getMusicInfo(req.body.musicSearch)
  //  var searchOption = document.getElementById("searchOption");
  //  if(searchOption.value == "Music"){
	console.log("hello");
   
})
module.exports = router;
