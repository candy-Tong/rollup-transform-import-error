'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var test = require('./abc');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var test__namespace = /*#__PURE__*/_interopNamespaceDefault(test);

console.log(test,test.a,test__namespace);

Object.defineProperty(exports, 'a', {
	enumerable: true,
	get: function () { return test.a; }
});
exports.default = test;
