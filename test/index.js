/*global describe:false, it:false, beforeEach:false, afterEach:false, before:false, after:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    expect = require('chai').expect,
    assert = require('chai').assert,
    path = require('path'),
    request = require('request'),
    sinon = require('sinon');


describe('Test Index', function () {

    var app, mock, options, server;


    before(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);
        server = {
            url: 'http://127.0.0.1:1337'
        };
    });


    after(function (done) {
        mock.close(done);
    });

    // check that itv server works


    // check that our route works
    it('should return a 200', function (done) {
        request.get(server.url+'/',function(err, res, body){
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

});


describe('test ITV Feeds', function () {
    var options;

    it('should get a JSON category feed from ITV', function (done) {

        options = {
            headers:{
                'Accept':'application/vnd.itv.default.category.v1+hal+json; charset=UTF-8'
            },
            url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/categories?broadcaster=ITV'
        };
        request.get(options, function(err, res, body) {
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            expect(res.headers['content-type']).to.equal('application/vnd.itv.default.category.v1+hal+json; charset=UTF-8');
            done();
        });
    });

    it('should get JSON channel feed', function () {
        options = {
            headers:{
                'Accept':' "application/vnd.itv.default.channel.v1+hal+json; charset=UTF-8"'
            },
            url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV'
        };
        request.get(options, function(err, res, body) {
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            expect(res.headers['content-type']).to.equal('application/vnd.itv.default.channels.v1+hal+json; charset=UTF-8');
            done();
        });
    });

    it('should get most popular JSON feed', function () {
        options = {
            headers:{
                'Accept':' "text/html; charset=UTF-8, application/vnd.itv.default.production.v2+hal+json; charset=UTF-8, application/vnd.itv.default.production.v1+hal+json; charset=UTF-8, application/vnd.itv.ctv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.nowtv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.fat.v2+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8"'
            },
            url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV'
        };
        request.get(options, function(err, res, body) {
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            expect(res.headers['content-type']).to.equal('application/vnd.itv.default.production.v2+hal+json; charset=UTF-8, application/vnd.itv.default.production.v1+hal+json; charset=UTF-8, application/vnd.itv.ctv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.nowtv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.fat.v2+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8');
            done();
        });
    });
});


describe('get mostPopular JSON', function () {
    var options;


});
