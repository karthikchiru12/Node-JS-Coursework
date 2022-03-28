
// reference type behaviour -> objects
var obj = { property : "value" };
console.log(obj.property);
var objNew = obj;
console.log(obj.property);
objNew.property = "new value";
console.log(obj.property);

//reference type behavious -> arrays
var arr = ["itemA","itemB"];
console.log(arr[1]);
var arrNew = arr;
console.log(arr[1]);
arrNew[1] = "itemC";
console.log(arr[1]);