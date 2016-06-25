/* global require: false */
/* global es6: false */

"use strict";

var assert = require('chai').assert;
var assert = require('/public/app.js').assert;

describe('Watch', function() {

    beforeEach(function () {
        var swifty = class Swifty;
    });


  describe('constructor()', function () {



    it('should return -1 when the value is not present', function () {
        console.log('swifty: ', swifty);
        assert.equal(-1, [1,2,3].indexOf(5));
        assert.equal(-1, [1,2,3].indexOf(0));
;
    })

  });


});