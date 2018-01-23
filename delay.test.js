let delay = require('./delay');

let f = delay(1);

test('Testing for 2 numbers , should return sum' , ()=>{
	expect(f(2)).toBe(3);
});

let f2=delay(-1);
test('Testing for 2 numbers , should return sum' , ()=>{
	expect(f2(1)).toBe(0);
});


let f3=delay('a');
test('Testing for string input , should return null' , ()=>{
	expect(f3(1)).toBe(null);
});


let f4=delay(1);
test('Testing for string input , should return null' , ()=>{
	expect(f4([1])).toBe(null);
});