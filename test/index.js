const test = require('tape');
const fn = require('../dist/is-offline');

test('is-offline', t => {
	t.is(typeof fn, 'object', 'exports an object');
	let keys = Object.keys(fn);
	t.is(keys.length, 2, 'exports two methods');
	t.is(typeof fn.watch, 'function', `exports.watch is a function`);
	t.is(typeof fn.default, 'function', `exports.default is a function`);
	t.end();
});
