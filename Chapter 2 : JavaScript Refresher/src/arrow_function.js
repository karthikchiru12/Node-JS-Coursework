const GlobalDirectory = {"101": "1", "102":"2"};

const getValue = function(index)
{
	return GlobalDirectory[index];
}
console.log(getValue("101"));




const getValueNew = (index) => {
	return GlobalDirectory[index];
}
console.log(getValueNew("102"));


const add  = (a,b) => a+b;
console.log(add(2,3));

const addOne  = a => a+1;
console.log(addOne(2));

const someFunction  = () => 2+10;
console.log(someFunction());