var assert = require('assert');

// assert.ok(false, 'not ok!');
assert.ok(true, 'yes, it is ok!');

assert.equal(1, '1', 'not equal');

assert.strictEqual(1, 1, 'not strict equal');

assert.throws(function(){
	throw new Error('wrong!!!!!');
}, Error, 'not throws');