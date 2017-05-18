// Whole-script strict mode syntax
'use strict'

const main = require('../index.js');

describe('isFingerNumber test suite', () => {
	test('isFingerNumber 3', () => {
		let actualx = main.isFingerNumber(3);
		let expectedx = true;
		expect(actualx).toBe(expectedx);
	});

	test('isFingerNumber 11', () => {
		let actualx = main.isFingerNumber(11);
		let expectedx = false;
		expect(actualx).toBe(expectedx);
	});

	test('isFingerNumber empty', () => {
		let actualx = main.isFingerNumber();
		let expectedx = false;
		expect(actualx).toBe(expectedx);
	});
	
	test('isFingerNumber string', () => {
		let actualx = main.isFingerNumber('hello');
		let expectedx = false;
		expect(actualx).toBe(expectedx);
	});

	test('isFingerNumber null', () => {
		let actualx = main.isFingerNumber(null);
		let expectedx = false;
		expect(actualx).toBe(expectedx);
	});

}); 



