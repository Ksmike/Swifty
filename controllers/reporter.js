'use strict';

var TestModel = require('../models/reporter');


module.exports = function (router) {

    var model = new TestModel();

    router.get('/', function (req, res) {
        res.render('reporter', model);
    });

};
