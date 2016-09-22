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
            .get('/factories/9b85dde2-5ff7-4f20-b3d7-613f33763052')
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
                expect(res.body.company_type).toEqual('Factory');
                done(res);
            });
    });
});