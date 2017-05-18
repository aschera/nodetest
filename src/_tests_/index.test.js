const makeHTML = require ('../index.js');

// we will test!

test('makeHTML test empty', () => {
	let actual = makeHTML('');
	let expected = makeHTML '<p></p>';
	expected(actual).toBe(expected);
});


test('makeHTML test', () => {
	let actual = makeHTML('yellow');
	let expected = makeHTML '<p>yellow</p>';
	expected(actual).toBe(expected);
});

