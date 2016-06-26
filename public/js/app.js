/* global $: false */
/* global document: false */
/* global _csrf: false */
/* global Swifty: false */

'use strict';

$(document).ready(function() {
	var swifty = new Swifty();
	console.log(swifty);
	swifty.init();
});


// jQuery events
//
$('body').on('click','.prodLink',function(){
	var link = $(this).data('href');
	$.ajax({
		url: link,
		headers: {'Accept': 'application/vnd.itv.default.production.v2+hal+json; charset=UTF-8, application/vnd.itv.default.production.v1+hal+json; charset=UTF-8, application/vnd.itv.ctv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.nowtv.production.v1+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.fat.v2+hal+json; charset=UTF-8, application/vnd.itv.hubsvc.production.v3+hal+json; charset=UTF-8'},
		dataType:'json'
	})
	.done(function(data) {
		console.log('success: ',data);
		//dust.render('productionCard', data._embedded.productions, handlePage)
	})
	.fail(function(e) {
		console.log('error: ',e);
	});
});