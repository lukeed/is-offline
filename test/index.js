const test = require('tape');
const fn = require('../dist/is-offline');

test('is-offline', t => {
	t.is(typeof fn, 'function', 'exports a function');
	t.end();
});
