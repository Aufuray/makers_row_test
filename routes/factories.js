var express = require('express');
var router = express.Router();
var companyHandler = require('./companyHandler');

/* GET list of factories and brands */
router.get('/', function(req, res, next) {
    companyHandler.listAll(res);
});

/* RENDER form to create new factory */
router.get('/create', function(req, res, next) {
    companyHandler.displayForm(res);
});

/* SAVE new factory with form data */
router.post('/create', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    companyHandler.saveNew(res, req, 'Factory');
}); 

/* GET factory with ID of id */
router.get('/:id', function(req, res, next) {
  companyHandler.listWithId(res, req);
});

module.exports = router;
