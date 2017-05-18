// Whole-script strict mode syntax
'use strict'

const main = require('../index.js');

describe('makeHTML test suite', () => {
	test('makeHTML empty string', () => {
		let actual = main.makeHTML('');
		let expected = '<p></p>';
		expect(actual).toBe(expected);
	});

	test('makeHTML normal string', () => {
		let actual = main.makeHTML('yellow');
		let expected = '<p>yellow</p>';
		expect(actual).toBe(expected);
	});

	test('makeHTML number', () => {
		let actual = main.makeHTML(5);
		let expected = '<p>5</p>';
		expect(actual).toBe(expected);
	});

	var o = {
	value: 52
	};

	test('makeHTML object', () => {
		let actual = main.makeHTML(o);
		let expected = '<p>{value: 52}</p>';
		expect(actual).toBe(expected);
	});
}); 
 



