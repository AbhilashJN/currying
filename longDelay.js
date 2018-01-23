let total = 0;
function longDelay(arg) {
	if (arg === undefined) {
		let res = total;
		total=0;
		return res;
        
	} else {
		total += arg;
		return longDelay;
	}
}

module.exports = longDelay;