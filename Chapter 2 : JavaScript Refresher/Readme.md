### Intro
- JavaScript is a **weakly typed language**. So no explicit type assignment and datatypes can be switched dynamically.
- JavaScript is **object oriented language.**
- Numbers, String, Boolean, undefined, null are the **primitive types**.
- Objects, Arrays are called the **reference types**.
- JavaScript internally uses two types of memory : **heap** and **stack**.
- The items whose size & structure can be exactly pre-determined can go into the stack i.e in case of numbers, strings, booleans.
- JavaScript stores those items in heap whose size & structure cannot be exactly pre-determined. i.e objects & arrays.
- So the primitive types are directly stored inside the stack. But for each item in heap, the address of an item in heap is stored in a pointer. The pointer for that item in heap in turn is stored in the stack.
- JavaScript is a versatile language.

### Bheaviour of reference types

```
//creating an object
var obj = { property : "value" };
```
- The variable obj contains the pointer the object created.
- Let us say we do the following operation on the created object.

```
var obj = { property : "value" };
var objNew = obj;
objNew.property = "new value";
console.log(obj.property); // new value
```
- The output in the console will be *"new value"*, because when we are changing the value of a property directly at that memory address and we did not actually copied the **obj** object into **objNew**. i.e both **obj** and **objNew** are pointing to the same address in heap.
- Similarly this idea applies to arrays also.

```
var arr = ["itemA","itemB"];
console.log(arr[1]) // itemB
var arrNew = arr;
arrNew[1] = "itemC";
console.log(arr[1]); // itemC
```
- So we need to construct a new array or object containing the values or properties of existing arrays or objects.
-  For arrays we can either use **slice()** method (which returns a new array) or **... (spread operator)** from ES6+.

```
var oldArr = ["itemA","itemB"];
var newArr = oldArr.slice();
//or
var newArr = [...oldArr]; 
// spread operator basically pulls all the elements out
```
- For objects we can either **Object.assign()** or the **...(spread operator)**.

```
var oldObj = { property : "value"};
var newObj = Object.assign({}, oldObj);
//or
var newObj = {...oldObj};
```

- **Note :** If there are nested arrays or objects, you need to clone all the elements or properties nested in each layer manually.

### Arrow functions

- A function which does not have a function name is called as the **anonymous function**. And generally we assign the anonymous function to a constant variable and then call it anywhere else.

```
const getValue = function(index)
{
	return GlobalDirectory.index;
}
console.log(getValue("101"));
```

- Similarly we can define the **arrow functions** :

```
const getValue = (index) => {
	return GlobalDirectory.index;
}
console.log(getValue("101"));
```
- If the arrow functions contains just one statement inside them, then there is no need to use curly braces arround the function and you can write such functions like below :

```
const add  = (a,b) => a+b;
console.log(add(2,3)); //5
```

- If the arrow function contains just one statement and only one parameter, then you would get the same result with or without parenthesis arround the function parameters.

```
const addOne  = a => a+1;
console.log(addOne(2)); //3
```

- **Note :** But if we have a arrow function with no parameters then we should definetly put an empty parenthesis, Otherwise it would given a syntax error.

```
const someFunction  = () => 2+1;
console.log(someFunction());
```

### this keyword

- Let us say there is a class which has a method, and we want to call the method inside the constructor of that class, we use this keyword.

```
class Example{
	constructor()
	{
		this.exampleMethod();
	}
	
	exampleMethod()
	{
		console.log("Hello from example Method.");
	}
}

new Example();
```

- The method **exampleMethod()** is called when the class **Example** is initialized using new keyword, where internally the constructor is called.