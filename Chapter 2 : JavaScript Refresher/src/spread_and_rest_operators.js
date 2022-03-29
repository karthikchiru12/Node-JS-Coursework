const getElements = (arg1, arg2, arg3) =>
{
	return [arg1,arg2,arg3];
};
console.log(getElements(1,2,3));

const getElements1 = (...args) =>
{
	return args;
};
console.log(getElements1(1,2,3,4,6));