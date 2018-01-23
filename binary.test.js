let binary = require('./binary');

describe('Testing the binary function' , ()=>
{
	test('Testing for number,number argument should return the sum',()=>{expect(binary(1,2)).toBe(3);});
	test('Testing for number,string argument should return null',()=>{expect(binary(1,'2')).toBe(null);});
	test('Testing for number,infinity argument should return null',()=>{expect(binary(1,Infinity)).toBe(null);});

	

});