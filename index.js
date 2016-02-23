'use strict';
var assert = require('assert');
var ErrorPlus = require('error-plus');

module.export = function ijAssert(condition, message, options) {
	try {
		assert(condition, message);
	}
	catch (nativeError) {
		var error = new ErrorPlus(nativeError, 'IllegalState');

		console.error(error.format());
		
		if (options.production) {
		  process.exit(1);
		}
		
		throw error;
	}
};
