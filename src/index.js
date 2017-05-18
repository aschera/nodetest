// Whole-script strict mode syntax
'use strict'

//  ***************** make HTML ***************** //
function makeHTML(text) {
let item = text;
if( typeof(text) === 'object' ){
	item = JSON.stringify(item).replace(/\\/g, '');
}
let result = '<p>' + item + '</p>';
	return `<p>${item}</p>`;
};


//  ***************** is Finger Number ***************** //
function isFingerNumber(n) {
	if( typeof(n) === 'number' && n >= 0 && n<= 10 )
		return true;
	return false;
};

//  ***************** sell products ***************** //

function sellProduct(product) {
	if (product.count === 'undefined') {
		throw new Error('Count is undefined');
	}
	if( typeof(product) !== 'object' )
		throw new Error('Count is not an object');
	if( typeof(product.count) != 'number' )
		throw new Error('Count is not a number');
	else if( product.count < 1 )
		throw new Error('No more products');
	product.count -= 1;
};


module.exports = 
{makeHTML:makeHTML,
isFingerNumber:isFingerNumber,
sellProduct:sellProduct
}
;
