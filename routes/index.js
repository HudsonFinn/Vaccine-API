var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("this is the home route");
});

router.post('/', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
