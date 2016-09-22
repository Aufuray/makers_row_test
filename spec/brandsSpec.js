'use strict';

var request = require('supertest');

describe('Brands', function () {
    var app;
    beforeEach(function () {
        app = require('../app.js');
    });
    afterEach(function () {
        app.close();
    });
    it('gets all brands and factories', function (done) {
        request(app)
            .get('/brands')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body.length).toBeGreaterThan(0);
                done(res);
            });
    });

    it('renders a form to create a new brand', function (done) {
        request(app)
            .get('/brands/create')
            .end(function (err, res) {
                if (err) return done.fail(res);
                done(res);
            });
    });

    it('creates a new brand with form data', function (done) {
        request(app)
            .post('/brands/create')
            .end(function (err, res) {
                if (err) return done.fail(res);
                expect(res.body.name).not.toBeNull();
                expect(res.body.company_type).toEqual('Brand');
                done(res);
            });
    });
});