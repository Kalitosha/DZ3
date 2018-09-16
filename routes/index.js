var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('./pages/index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
    res.render('./pages/login', { title: 'Login' });
});

router.get('/admin', function(req, res, next) {
    res.render('./pages/admin', { title: 'Admin' });
});


router.post('/', function(req, res, next) {
    // todo надо доделать
    // res.json({ title: 'Home' });
});

router.post('/login', function(req, res, next) {
    // todo надо доделать
    // res.json({ title: 'Login' });
});

router.post('/admin', function(req, res, next) {
    // todo надо доделать
    // res.json({ title: 'Admin' });
});

module.exports = router;
