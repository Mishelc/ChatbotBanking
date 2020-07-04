const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/productos', function(req, res) {
    res.render('products');
});
router.get('/seguridad', function(req, res) {
    res.render('fraudes');
});

module.exports = router;