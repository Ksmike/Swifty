(function(exports) {
  "use strict";

	function Swifty() {}
	exports.Swifty = Swifty;

	Swifty.prototype = {
	init: function() {
		this.isotopeGrid();


	},
	isotopeGrid: function () {
		$('.grid').isotope({
			itemSelector: '.grid-item'
		});
	}
  };

})(this);