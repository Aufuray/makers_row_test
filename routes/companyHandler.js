var factoryStore = require('json-fs-store')('store/companies');
var fs = require('fs');

/* List ALL factories and brands */
function listAll(res){
    factoryStore.list(function(err, factories) {
        if (err) throw err;
        res.json(factories);
    });
}

/* List factory or brand with ID */
function listWithId(res, req){
    factoryStore.load(req.params.id, function(err, factory){
        if (err) throw err;
        res.json(factory);
    });
}

/* Display form to create new factory or brand*/
function displayForm(res){
    fs.readFile('./createnew.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.write(html);
        res.end();
    });
}

/* Save new factory or brand*/
function saveNew(res, req, type){
    var newFactory = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        city: req.body.city,
        state: req.body.state,
        company_type: type
    };
    factoryStore.add(newFactory, function(err) {
        if (err) throw err;

        res.json(newFactory);
    });
}

exports.listAll = listAll;
exports.listWithId = listWithId;
exports.displayForm = displayForm;
exports.saveNew = saveNew;
