let total = 0;
function longDelay(arg) {
	if (arg === undefined) {
		return total;
        
	} else {
		total += arg;
		return longDelay;
	}
}

module.exports = longDelay;