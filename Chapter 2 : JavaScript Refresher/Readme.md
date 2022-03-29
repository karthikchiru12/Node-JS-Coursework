### Intro

- JavaScript is a **dynamic,weakly typed language** which is compiled at runtime. So no explicit type assignment and datatypes can be switched dynamically.
- JavaScript is **object oriented language.**
- Numbers, String, Boolean, undefined, null are the **primitive types**.
- Objects, Arrays are called the **reference types**.
- JavaScript internally uses two types of memory : **heap** and **stack**.
- The items whose size & structure can be exactly pre-determined can go into the stack i.e in case of numbers, strings, booleans.
- JavaScript stores those items in heap whose size & structure cannot be exactly pre-determined. i.e objects & arrays.
- So the primitive types are directly stored inside the stack. But for each item in heap, the address of an item in heap is stored in a pointer. The pointer for that item in heap in turn is stored in the stack.
- JavaScript is a versatile language.

### Behavior of reference types

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
- For arrays we can either use **slice()** method (which returns a new array) or **... (spread operator)** from ES6+.

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

- A function which does not have a function name is called as the **anonymous function**. And generally we assign the anonymous function to a constant variable and then call it anywhere else. The variable contains the **reference** to the function.

```
const getValue = function(index)
{
    return GlobalDirectory.index;
}
console.log(getValue("101"));
```

- Similarly we can define the **arrow functions**, where we store the reference of the function in a variable :

```
const getValue = (index) => {
    return GlobalDirectory.index;
}
console.log(getValue("101"));
```

- If the arrow functions contains just one statement inside them, then there is no need to use curly braces around the function and you can write such functions like below :

```
const add  = (a,b) => a+b;
console.log(add(2,3)); //5
```

- If the arrow function contains just one statement and only one parameter, then you would get the same result with or without parenthesis around the function parameters.

```
const addOne  = a => a+1;
console.log(addOne(2)); //3
```

- **Note :** But if we have a arrow function with no parameters then we should definitely put an empty parenthesis, Otherwise it would given a syntax error.

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
- Imagine you are using an event listener on a button :

```
function example()
{
 console.log("button clicked");
}

const button = document.getElementById('btn_sample');
button.addEventListener('click', exampleMethod());
```

- In the above code, the goal is to run the function **example()**, when the button is clicked. But the function would not wait until the button is clicked, instead it executes right after the moment the code is executed or parsed. So you can see "button clicked" in your console every time you have reloaded your page even if you haven't clicked the button.
- So similar to what we do in the arrow functions, instead of directly using **example()**, we just pass the reference only to achieve the desired functionality.

```
function exampleMethod()
{
 console.log("button clicked");
}

const button = document.getElementById('btn_sample');
button.addEventListener('click', exampleMethod);
```

- Now let us put the button event listener inside the class example before :

```
class Example{
    constructor()
    {
        this.exampleMethod();
        const button = document.getElementById('btn_sample');
        button.addEventListener('click', this.exampleMethod);
    }
    
    exampleMethod()
    {
        console.log("Hello from example Method.");
    }
}

new Example();
```

### Objects, properties & methods

- An object in JavaScript can hold key-value pairs. An object is represented in curly braces **{ }**. Inside object you can also have functions which can be called using **ObjectName.FunctionName()**.

```
const obj = {
    property1 : 10,
    property2 : "Shiva",
    property3 : () => {
        console.log("property3 "+this.property2);
    }
}

obj.property3();
```

- In the above code example the output will be "property3 undefined". Because the this keyword will be referring to global node runtime scope and not the object. In order to make this work either we need to use function keyword or completely different approach as mentioned below.

```
const obj = {
    property1 : 10,
    property2 : "Shiva",
    property3() {
        console.log("property3 "+this.property2);
    }
}

obj.property3();
```

### Arrays & methods

- An array is a list of heterogeneous elements in JavaScript. AN array is represented in square braces **\[ \]**.

```
const arr = ["Value1", 2, {"name":"Sam"}];
// Traversing array
for (element of arr)
{
    console.log(element);
}
```

- You can use **map()** function to transform the array and then return the modified array.

```
const arr = ["Value1", "Value2", "Value2"];
console.log(arr.map(element => element+" extra"));
// output:['Value1 extra', 'Value2 extra', 'Value2 extra']
```

- If there is an array which is declared as **const**, even then we can add elements to that array using the push method. As we are not changing the base address of the array, but just adding an element to the already existing array.

```
const arr = ["Value1", "Value2", "Value2"];
arr.push("Value4");
console.log(arr);
```

### Spread & Rest operators

- **...** (Spread operator) pulls out all the elements of an array which we can assign to a new array. This can be used to imitate the pattern of immutability, to make the code more sensible.

```
const arr = ["Value1", "Value2", "Value2"];
const arrNew = [...arr];
```

- Similarly we can use the spread operator for the objects too.
- **Rest operator** is similar to varags in Java. It is used when we want to send the arguments to a function dynamically.

```
const getElements = (arg1, arg2, arg3) =>
{
    return [arg1,arg2,arg3];
};
console.log(getElements(1,2,3));
```

- In the above example, if you want to send another argument we need to explicitly define it in the function parameters. To avoid this issue, we can use the rest operator (...args).

```
const getElements = (...args) =>
{
    return args;
}
console.log(getElements(1,2,3,4)); //[1,2,3,4]
```

### Destructuring

- Let us say we have an object with few properties.

```
const obj = {
name : "Karthik",
age  : 23,
gender : "Male"
};
```

- If we want to print a specific property inside that object using a function :

```
const printName = inObj =>
{
    console.log(inObj.name);
;}
printName(obj); //Karthik
```

- But instead of that we can also use the below syntax (destructuring an object) :

```
const printName = ({name}) =>
{
    console.log(name);
};
printName(obj); //Karthik
```

- In the above code **name** is the local variable. We can use similar syntax to destructurize an object into variables. But these variable names must be same as properties names in objects. Otherwise the values in these variables will be undefined.

```
const {name, age, gender} = obj;
console.log(name, age, gender);
// Karthik 23 Male
```

- Similarly we can deconstruct an array. But unlike objects, we can use whatever variable names we desire.

```
const arr = ["Value1","Value2","Value3"];
const [val1, val2] = arr;
console.log(val1, val2); // Value1 Value2
```

- While deconstructing an array, if we expect more variables than that are there in array, their values will be undefined.

```
const [va1, va2, va3, va4] = arr;
console.log(va1, va2, va3, va4);
//Value1 Value2 Value3 undefined
```

### Template literals

- The conventional way to use variables within the strings :

```
const name = "Karthik";
const age  = 23;
console.log("My name is " + name + " and I am " + age + " years old.");
```

- Using template literals, we can use **``** instead of double quotes or single quotes. And to use variables, we can use **${variable_name}**.

```
console.log(`My name is  ${name}  and I am  ${age}  years old.`);
```

### Asynchronous code

- **setTimeout()** function executes the code/function which is given as first argument after a delay of some milliseconds, which is given as the second argument.

```
setTimeout(() => {
console.log("Inside setTmeout");
}, 2000);
console.log("Hello");
console.log("World");
```

- Now the output of the above code snippet would be in this order:

Hello\
World \
//after 2 milliseconds//\
Inside setTimeout

- Now the logic written inside the **setTimeout()** function is the asynchronous code, i.e it does not execute immediately. Wheareas the two console.log() statements after that are asynchronous.
- So whenever JavaScript is executing from top to down, it recognizes that there is a call back function which needs to be called once the timer runs out, and then it executes the other synchronous statements.
- Using callback functions like in the above example wont be a problem until there are multiple async operations dependent on each other.

```
const fetchData = callback => {
	setTimeout(() => {
		callback("Done!");
	}, 3000);
};

setTimeout( () => {
	console.log("Timer is done!");
	fetchData(text => {
		console.log(text);
	})
} ,2000);

console.log("Hello");
console.log("World");
```
- The output of the above code snippet will be :
Hello\
World\
//after 2 milliseconds\
Timer is done!\
//after 3 milliseconds\
Done!
