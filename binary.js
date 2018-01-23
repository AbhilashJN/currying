let binary = (first,second) => {	
	if(typeof(first)==='number' && typeof(second)==='number')
	{
		return first+second;
	}
	else{
		return null;
	}
};
module.exports = binary;
