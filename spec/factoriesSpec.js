'use strict';

var request = require('supertest');

describe('Factories', function () {
    var app;
    beforeEach(function () {
        app = require('../app.js');
    });
    afterEach(function () {
        app.close();
    });
    it('gets all factories', function (done) {
        request(app)
            .get('/factories')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body.length).toBeGreaterThan(0);
                done(res);
            });
    });
    it('gets a single factory', function (done) {
        request(app)
            .get('/factories/aced63e4-8929-40c6-8916-30514edce8e7')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body).not.toBeNull();
                done(res);
            });
    });

    it('renders a form to create a new factory', function (done) {
        request(app)
            .get('/factories/create')
            .end(function (err, res) {
                if (err) return done.fail(res);
                done(res);
            });
    });

    it('creates a new factory with form data', function (done) {
        request(app)
            .post('/factories/create')
            .end(function (err, res) {
                if (err) return done.fail(res);
                expect(res.body.name).not.toBeNull();
                done(res);
            });
    });

});