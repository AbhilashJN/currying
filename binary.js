let binary = (first,second) => {	
	if(typeof(first)==='number' && isFinite(first) && typeof(second)==='number' && isFinite(second))
	{
		return first+second;
	}
	else{
		return null;
	}
};
module.exports = binary;
