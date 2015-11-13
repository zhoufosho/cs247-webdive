var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS247 Web Bootcamp', homepage: true});
});

router.get('/html', function(req, res, next) {
  res.render('html', { title: 'CS247: HTML Refresher' });
});

router.get('/css', function(req, res, next) {
  res.render('css', { title: 'CS247: CSS Cliffnotes' });
});

router.get('/jq-animation', function(req, res, next) {
  res.render('jq-animation', { title: 'CS247: jQuery Animations' });
});

router.get('/grids', function(req, res, next) {
  res.render('grids', { title: 'CS247: Grids Galore' });
});

router.get('/jsbasics', function(req, res, next) {
  res.render('js-basics', { title: 'CS247: Javacript Basics' });
});

router.get('/jspatterns', function(req, res, next) {
  res.render('js-patterns', { title: 'CS247: Javacript Patterns' });
});

router.get('/jsdom', function(req, res, next) {
  res.render('js-dom', { title: 'CS247: DOM Traversal' });
});

router.get('/jq', function(req, res, next) {
  res.render('jq', { title: 'CS247: jQuery' });
});


module.exports = router;
