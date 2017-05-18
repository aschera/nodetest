// Whole-script strict mode syntax
'use strict'

const main = require('../index.js');

		var product = {
		name: 'chocolate',
		price: 25.5,
		count: 50
		};


describe('sell products test suite', () => {

	test('sell products', () => {
		main.sellProduct(product);
		let actual = main.sellProduct(product);
		let expected = 49;
		expect(actual).toBe(expected);
	});


}); 



