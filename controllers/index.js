'use strict';

var IndexModel = require('../models/index');
var request = require('request');

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        getCategories(function(err,cats){
            //todo error handler
            model.categories = JSON.parse(cats)._embedded.categories;
            getMostPopular(function(err,pop){
                //todo error handler
                model.mostPopular = JSON.parse(pop)._embedded.productions;
                getChannels(function (err, chan) {
                    model.channels = JSON.parse(chan)._embedded.channels;
                    res.render('index', model);
                });
            });
        });
    });

};

function getMostPopular(cb) {
   var options = {
        headers:{
            'Accept': 'application/vnd.itv.default.production.v2+hal+json; charset=UTF-8, application/vnd.itv.default.production.v1+hal+json; charset=UTF-8, application/vnd.itv.ctv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.nowtv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.fat.v2+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8'
        },
        url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV'
    };
    request.get(options, function(err, res, body) {
        cb(err,body);
    });
}

function getChannels(cb) {

    var options = {
        headers:{
            'Accept': 'application/vnd.itv.default.channel.v1+hal+json; charset=UTF-8'
        },
        url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV'
    };
    request.get(options, function(err, res, body) {
        cb(err,body);
    });

}

function getCategories (cb) {
    var options = {
        headers:{
            'Accept': 'application/vnd.itv.default.category.v1+hal+json; charset=UTF-8'
        },
        url:'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/categories?broadcaster=ITV'
    };
    request.get(options, function(err, res, body) {
        cb(err, body);
    });
}




