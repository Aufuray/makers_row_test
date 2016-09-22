var express = require('express');
var router = express.Router();
var companyHandler = require('./companyHandler');

/* GET list of brands and factories */
router.get('/', function(req, res, next) {
    companyHandler.listAll(res);
});

/* RENDER form to create new brand */
router.get('/create', function(req, res, next) {
    companyHandler.displayForm(res);
});

/* SAVE new brand with form data */
router.post('/create', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    companyHandler.saveNew(res, req, 'Brand');
});

module.exports = router;
