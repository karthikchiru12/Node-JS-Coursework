const arr = ["Value1", 2, {"name":"Sam"}];
// Traversing array
for (element of arr)
{
	console.log(element);
}

const arr1 = ["Value1", "Value2", "Value2"];
console.log(arr1.map(element => element+" extra"));

const arr2 = ["Value1", "Value2", "Value2"];
arr2.push("Value4");
console.log(arr2);