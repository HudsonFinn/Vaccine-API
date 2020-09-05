var express = require('express');
var router = express.Router();

router.get('/mongo', function(req, res, next) {
  res.send("this is the home route");
});

module.exports = router;
