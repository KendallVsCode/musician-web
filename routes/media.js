var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('media', { title: 'Media' });
  });

module.exports = router;