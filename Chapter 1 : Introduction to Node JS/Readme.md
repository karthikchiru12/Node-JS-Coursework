### Intro

- Node JS is a JavaScript runtime.
- Node JS is built on the top of the vanilla JavaScript.
- Node JS takes the JavaScript code and puts it into a differrent environment to run it on the server.
- Node JS is used to run the JavaScript outside of the browser.
- Node JS uses V8 engine, which is developed by Google to run the JavaScript in the browser. V8 engine essentially takes the JavaScript code and compiles it into machine code.
- V8 engine is written in C++.
- Node JS takes that V8 engine and adds various features on top of it like : working with local file system...etc. As such things are not possible in browser.

### Checking the version

```
$node -v
```

### Entering interactive mode (repl)

- In this you can run basic JavaScript code. But we generally build our programs & store them in files and then execute them with Node.

```
$node
>1+20
21
>2*3
6
>
```
- To exit you can ctrl+c twice or type **.exit**.

### Hello world program using node.js

- Create a file with **.js** extension. eg : *app.js* which contains the following code.
```
console.log("Hello world");
```
- In order to run the program you can simply execute the following command.
-
```
$node app.js
Hello world
$
```

### Using the filesystem functionality of Node JS

 - Let us say we want to write the output of a program to a file, our program needs to have access to the file system.
 - And this can be acheived by importing file system model into our app.
 
```
require('fs');
```
- We can store this in a constant variable.

```
const fs = require('fs');
```

- Then we can use this *fs* variable to write something onto a file.

```
//app_write_to_file.js
const fs = require('fs');
fs.writeFileSync('sample1.txt','This is a sample.')
```

- When you execute the **.js** file, you can find a sample1.txt file in your directory.

```
$node app_write_to_file.js
```

### Usage of Node JS

- Whenever a browser sends a request to `https://example.com` , then a server comes into play. We will have some server running in the internet with an associated IP address.
- So when server gets the incoming request it sends a response HTML page (along with CSS and JS).
- On the server we do the tasks that are usually not possible in the browser like : 
	1.  Authentication (Login/Signup), Handling requests.
	2.  Using a database.
	3.  Server side validation.
	4.  Your *business logic* can be written on that server (in this case its Node JS).

- Node JS being a JavaScript runtime, you can run any JavaScript code within the runtime. Apart from the server side business logic, you can also use it for utility scripts, build tools written in JavaScript which can be executed in your system directly without any browser.
- But the main purpose of Node JS being able to create & run a server and listen to incoming requests.
- In PHP we need to use extra tools like Apache or nginx which runs the server and listen to the incoming requests. But Node JS creates, runs a server, listen to incoming requests. Also it executes the business logic on your server side and sends a response back to the client in the form of HTML, JSON ..etc.
- Node JS alternatives are Django(Python) or PHP...etc

### REPL

- **R** : **R**ead user input.
- **E** : **E**valuate user input
- **P** : **P**rint output
- **L** : **L**oop and wait for new input



