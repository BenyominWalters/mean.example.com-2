var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Express', name:'Benjamin' });
});

module.exports = router;
