var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS247 Web Bootcamp'});
});

router.get('/html', function(req, res, next) {
  res.render('html', { title: 'HTML Refresher' });
});

router.get('/css', function(req, res, next) {
  res.render('css', { title: 'CSS Cliffnotes' });
});

router.get('/js', function(req, res, next) {
  res.render('js', { title: 'Javascript Jam' });
});

router.get('/grids', function(req, res, next) {
  res.render('grids', { title: 'Grids Galore' });
});

module.exports = router;
