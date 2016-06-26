/* global require: false */
/* global es6: false */
/* global mocha: false */
/* global chai: false */
/* global sinon: false */
/* global describe: false */
/* global beforeEach: false */
/* global it: false */
/* global Swifty: false */
/*esversion: 6*/

'use strict';

var expect = chai.expect;

describe('Swifty', function() {
	var swifty, isotopeGridStub, returnedObj;

	beforeEach(function () {
		swifty = new Swifty();
	});

	describe('init', function() {


		it('is defined', function() {
			expect(swifty).to.not.be.undefined;
		});

		it('can run init can run isotopeGrid()', function () {
			isotopeGridStub = sinon.stub(swifty, 'isotopeGrid').returns({value:'pizza'});
			returnedObj = swifty.init();

			expect(returnedObj.value).to.equal('pizza');
			expect(isotopeGridStub).to.have.been.calledOnce;

		});
	});

	describe('isotopeList()', function() {
		it('can render a list of categories', function () {
			var isotopeStub = sinon.stub($, 'isotope');
			swifty.isotopeGrid();


		});
	});



});