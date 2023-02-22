'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var test = require('./abc');

console.log(test,test.a,123);

Object.defineProperty(exports, 'a', {
	enumerable: true,
	get: function () { return test.a; }
});
exports.default = test;
