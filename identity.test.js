let identity = require("./identity");

describe("Testing the identity function" , ()=>
{
	test("Testing for number argument",()=>{expect(identity(1)).toBe(1);});
	test("Testing for string argument",()=>{expect(identity("asd")).toBe("asd");});
	test("Testing for array argument",()=>{expect(identity([1,2,3])).toEqual([1,2,3]);});
	test("Testing for object argument",()=>{expect(identity({a:1})).toEqual({a:1});});
	test("Testing for no argument",()=>{expect(identity()).toBe(undefined);});
	test("Testing for null argument",()=>{expect(identity(null)).toBe(null);});

});