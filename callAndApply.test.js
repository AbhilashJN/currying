let callAndApply = require('./callAndApply');


describe('Tests for call function' , ()=>{

	test('testing with sample update function' , ()=>{
        
		expect(callAndApply.caller({name:'',age:0,tshirt:''},function(name,age,tshirt){this.name=name ; this.age=age;this.tshirt=tshirt;return this;},'ad',12,'s')).toEqual({name:'ad',age:12,tshirt:'s'});}
	);

    
});