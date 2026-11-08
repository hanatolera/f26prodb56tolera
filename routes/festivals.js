var express = require('express');
var router = express.Router();

/* GET festivals page. */
router.get('/', function(req, res, next) {
  res.render('festivals', {
    title: 'Search Results Festivals'
  });
});

module.exports = router;