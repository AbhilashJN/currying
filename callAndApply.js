var callAndApply = {
	caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
		method.call(object,nameArg,ageArg,tShirtSizeArg);
		return object;
	},
	applier: function (object, method, argumentsArr) {
		// your code
	}
};
module.exports = callAndApply;
