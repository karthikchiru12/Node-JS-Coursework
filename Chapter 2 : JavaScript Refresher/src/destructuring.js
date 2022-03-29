const obj = {
    name: "Karthik",
    age: 23,
    gender: "Male"
};

const printName = inObj => {
    console.log(inObj.name);
}

printName(obj);

const printName1 = ({name}) =>
{
	console.log(name);
};
printName1(obj); 

const {name, age, gender} = obj;
console.log(name, age, gender);

const arr = ["Value1","Value2","Value3"];
const [val1, val2] = arr;
console.log(val1, val2);

const [va1, va2, va3, va4] = arr;
console.log(va1, va2, va3, va4);