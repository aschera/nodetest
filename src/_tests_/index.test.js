var makeHTML = require('../index.js');

// här kommer testen

describe('makeHTML test suite', () => {
	test('makeHTML empty string', () => {
		var actual = makeHTML('');
		var expected = '<p></p>';
		expect(actual).toBe(expected);
	});

	test('makeHTML normal string', () => {
		expect(makeHTML('yellow')).toBe('<p>yellow</p>');
	})
});
