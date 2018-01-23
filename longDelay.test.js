let longDelay = require('./longDelay');


test('Test for invocation with 1 then 2 then 3 then no arguments , should return sum=6' , ()=>{

	expect(longDelay(1)(2)(3)()).toBe(6);
});


{
	test('Test for invocation with 1 then no arguments , should return sum=1' , ()=>{
		expect(longDelay(1)()).toBe(1);
	});
}