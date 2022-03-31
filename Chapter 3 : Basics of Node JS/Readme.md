### Introducton

- The important part of building a web server is the ability of the server to handle the incoming requests and responses and also using databases.
- Node JS uses asynchronous code and a concept called as **event loop** to stay active and ensure that server and scripts inside it are always running and working as desired.
- A simple way to look at how web works :
\
\
![Web server working.svg](Web%20server%20working.svg)
- The communication of request and response happen through well defined protocols. i.e **HTTP** (**H**yper **T**ext **T**ransfer **P**rotocol), **HTTPS** (**H**yper **T**ext **T**ransfer **P**rotocol **S**ecure).
- HTTPS contains something called **SSL encryption**. Which does not let anyone read the data if they are spoofing on it.

### Creating a Node server

- Some of the core modules which helps us in creating a server in node JS :
	1. **http :** Launch a server, send requests.
	2. **https :** Launch an SSL server. Where all the data that is transferred is encrypted.
	3. **fs :** File system module.
	4. **path :** To handle the file and directory paths on various operating systems
	5. **os :** Operating system functionalities.

- So to start a server, you can put this code in a **.js** and run it with Node JS :

```
const http = require('http');

function requestListener(request, response)
{
	console.log("Server is up!");
	console.log(req); //to see what data is in request
}

http.createServer(requestListener);
```
- The **require()** function of Node JS will enable you to either import modules or other JavaScript files into your code. If you are import files the path must look like **require('./file.js')** or **require('/file.js')**
- The function **http.createServer()** takes an request listener function as an argument and executes that function whenever there is an incoming request.
- The Node JS gives us two objects, one for request (Which contains the incoming data) and response object, by using which we can send a response to whoever made that request.
- The above code does not produce any output and the program terminates, as we have not defined where the server is and what is its address. And **createServer()** method returns a server object.

```
const http = require('http');

function requestListener(request, response)
{
	console.log("Server is up!");
	console.log(request); //to see what data is in request
}

const server = http.createServer(requestListener);

server.listen(3000);
```
- The method **server.listen()**, takes arguments like port number and hostname. If no input is given, by default it takes the port 80 and hostname is localhost.
- The above code prints the message "Server is up!" and also the the incoming request object, but the program will be running constantly listening to the incoming requests until terminated manually.
- But when you open the url **http://localhost:3000** nothing shows up, as we have not defined any response in our code.
- The same code can be simply written using arrow functions.

```
const http = require('http');
const server = http.createServer((request, response) =>
{
	console.log("Server is up!");
	console.log(request);
});

server.listen(3000);
```
- When we run the above code, the Node JS keeps the program in something called **event loop**. Which makes our server running in the background as long as there is some work to do. i.e as long as there is an event listener registered. the arrow function **(request, response) =>** is the event listener which is registered.
- So all the code is managed by this event loop in the Node JS.
- Node JS uses such event driven approach for all other things as well.
- Node JS uses this pattern as it executes single threaded JavaScript. So the entire node process basically uses one thread on computer its running on.
- Node JS, uses the event loop to execute something whenever a certain event occurs. So its always available. And behind the scenes it also does multi-threading which can handle hundreds of thousands of requests.
- If you want to unregister this listener, we can simply use the method **process.exit()**.

```
const http = require('http');
const server = http.createServer((request, response) =>
{
	console.log("Server is up!");
	console.log(request);
	process.exit();
});

server.listen(3000);
```
- Now once we open http://localhost:3000, there will be a message in the console and incoming request is printed. Then the program stops immediately as we have used process.exit(). Other way to do this manually is to use **Ctrl + C** in the terminal.

### Understanding requests

- When we start the server by executing the program and open the url http://localhost:3000, we can see that the program receives a request object.
- This request object is quite big and also contains meta information.
- Like which http version is being used, which address the request was sent to (host), how to use cache, which is the accepted response format, accepted language, from which browser the request was sent..etc.
- Now we can use a few crucial details like the method of request (GET or POST), the url requested (in the above program its **/** as whatever that is present after localhost:3000 is considered as url), and the associated headers.

```
const http = require('http');
const server = http.createServer((request, response) =>
{
	console.log(request.method,
	request.url, 
	request.headers);
	//process.exit();
});

server.listen(3000);
```
- The output of above program would look something like this :

```
GET / { host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Linux"',
  'upgrade-insecure-requests': '1',
  'user-agent':
   'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
  cookie:
   'username-localhost-8888="2|1:0|10:1647942965|23:username-localhost-8888|44:ZWFiMTViNWRjMTRiNDBjM2IyM2I0NWIzNTc2MWYyZmE=|04fef9699b87927f3c9946832a46191502f87170c13ac8788cd298db0010adb3"' }
   ```
   

### Sending a response

-  For sending the response, we can set the header (**response.setHeader()**) for the response object and along with the content(**response.write()**) of the response object.

```
const http = require('http');
const server = http.createServer((request, response) =>
{
	response.setHeader("Content-type","text/html");
	response.write("<h1>Yep! Server is up...");
	response.write("<p>the server is Node JS</p>");
	response.end();
});

server.listen(3000);
```
- We can keep on adding content line by line, and at the end we can write **response.end()**, post which we cannot write anymore content. Otherwise we are going to get an error.
- Now once we load http://localhost:3000 we can get see an html output as we have defined in the above code.
- We can refer the other headers here : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

### Routing requests

- We can configure what the Node JS must do, based on what URL the client is requesting. For example we can ask the input from a user on homepage and redirect him to a new page.
- So for that we need to get the URL.
- A GET request will be sent by default when you click on a link or enter a URL. A POST request must be explicitly defined using a form like below.
- Whenever we are dealing with multiple URL or multiple pages, we need to make sure that we need to use return response.end(), so as to avoid any other code being executed below it.

```
const http = require('http');
const server = http.createServer((request, response) =>
{
	const url = request.url;
	if(url === '/')
	{
		response.setHeader("Content-type","text/html");
		response.write("<h1>This is the home page!</h1>");
		response.write("<p>the server is Node JS</p>");
		response.write(`<form action="/message" method="POST"><input type="text"><button type="submit">Zap</button></form>`);
		return response.end();
	}
	if(url === '/message')
	{
		response.setHeader("Content-type","text/html");
		response.write("<h1>This is the message page!</h1>");
		response.write("<p>the server is Node JS</p>");
		return response.end();
	
	}
	
});

server.listen(3000);
```

- Let us say we want to redirect to localhost from the message page, we can do that by using **statusCode = 302** and **Location header**.

```
const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.setHeader("Content-type", "text/html");
        response.write("<h1>This is the home page!</h1>");
        response.write(`<form action="/message" method="POST"><input tye="text" name="message_id"><button type="submit">Zap</button></form>`);
        return response.end();
    }
    if (url === '/message' && method === 'POST') {
        
       setTimeout(()=>{
        fs.writeFileSync("message.txt",new Date().toString());
        response.setHeader("Location","/");
        response.statusCode = 302;
        return response.end();
       },2000);

    }

});

server.listen(3000);
```

- After 2 seconds on clicking the button, the site redirects back to the homepage and a file called message.txt is created with current date and time. We can observe the redirect under the network section in chrome developer tools.

### Parsing request body

- Whenever you are sending the data via form, we cannot access it directly. It is sent as a **stream of data**.
- The reason behind this is that, a server can never know exactly what type of data and of what size is being sent. If its a file it will be even more huge.
- **So whenever the data is sent, *it is sent in parts*. This also means that we cannot work on the data right after we received the first chunk or part. We need to wait till all the chunks are received, then completely parse it. Only then you can use the data. To achieve this JS uses something called as the buffer, which holds multiple chunks of data before which they are finally parsed and released.**
- We need a listener, which constantly listens to the incoming chunks of data and then execute a specific function upon receiving a chunk to store it into a buffer. Similar to the create server method. Then we also need to use another listener, to parse the data when finally all the chunks are received by the server, which then executes a specific function to parse all the received data.
- For this we use **request.on()** method, which takes two arguments. The first argument is the event and second argument is the function to be executed when event is fired.

```
const body = []
request.on("data",(chunk) => {
	body.push(chunk);
});
```
- The above code uses **data event**, which fires when data chunks are being received.

```
request.on("end",() => {
	const parsedBody = Buffer.concat(body).toString();
});
```
- The above code uses the **end event,** which fires when its done with the parsing of incoming chunks of data. Now we use a method called **Buffer.concat()** to combine all chunks and then convert it into a string.
- Combining them together :

```
const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.setHeader("Content-type", "text/html");
        response.write("<h1>This is the home page!</h1>");
        response.write(`<form action="/message" method="POST"><input tye="text" name="message_id"><button type="submit">Zap</button></form>`);
        return response.end();
    }
    if (url === '/message' && method === 'POST') {
        
    const body = []
	request.on("data",(chunk) => {
	body.push(chunk);
	console.log(chunk);
	});

    var parsedBody = "";
	
	request.on("end",() => {
	parsedBody = Buffer.concat(body).toString();
	console.log(parsedBody);
    response.setHeader("Content-type", "text/html");
    response.write("<h1>Success! check your console </h1>");
    return response.end();
	});


    
    }

});

server.listen(3000); 
```
- Let us say we have sent the input as "karthik chiru", then chunk would look something like this in the console : **<Buffer 6d 65 73 73 61 67 65 5f 69 64 3d 6b 61 72 74 68 69 6b>**. And once it is parsed, it will be in this format : **message_id=karthik+chiru**. 

### writeFile() v/s writeFileSync()

- Imagine there is a huge file (say) 1 GB that needs to be written to the disk. Now if you use the method **writeFileSync()**, as it is a synchronous method, it does not allow any other code to execute while its running. This can cause a huge issue, as if our server is writing a file onto the disk using writeFileSync method, it blocks all the code execution until the file is successfully written onto the disk. So even new incoming requests would not be handled during that operation.
- So it is better to use **writeFile()** instead of **writeFileSync()**. Which utilizes event driven architecture.

```
fs.writeFile("filename.txt", "Some dummy text", err => {
	console.log(err);
});
```
- In the above code we have used a callback function which is executed when the file is successfully written onto the hard disk.

### Single thread, Event loop & Blocking code

- Node JS uses **single JavaScript thread**. Whenever we start the Node JS server, it starts the **event loop**. And this event loop is responsible for handling only the event callbacks, but it does not handle time taking operations like writing a file onto a disk.
- All such long and time taking operations are sent to something called as the **worker pool**, which is also initialized by the Node JS when the server starts. The worker pool is responsible for all the heavy lifting jobs.
- **Worker pool** is completely detached from your JavaScript code.The worker pool runs on a different thread altogether. It also has the ability to spin up multiple threads. It is closely intervened with the operating system.
- For example if you are performing some operations on a file, the worker pool will take care of that operations.
- Once the file operation is done, the appropriate callback defined for that operation will be called by the event loop.
- In Node JS, the event loop runs in iterations. And in each iteration the event loop will look something like this :

1. At the start of the event loop iteration, it checks if there are any due timer callbacks that needs to be run and if yes, then it executes them, i.e callback functions defined using **setInterval()** and **setTimeout()** functions.
2. Then it checks for any other pending callbacks. eg : I/O related callbacks. And if it finds any,then it executes those callbacks.
3. And let us assume there are too many outstanding callbacks, then it postpones the outstanding callbacks to be executed in the next iteration of the event loop.
4. And once all the open callbacks that are to be executed in the current iteration are completed, then the event loop enters a **poll phase**. Where the node JS will basically look for the new I/O events. And then makes sure that it executes their callbacks as soon as possible. Otherwise it will defer the execution and then register all of them as pending callback which needs to be executed in the next iteration.
5. After this phase, it will check if there are any timer callbacks that are to be executed and then executes them, otherwise it jumps to the next phase.
6. The next phase is called as the **check phase**. In this phase it executes any callbacks which are set by **setImmediate()** function. Important thing to note here is that, these callbacks set by **setImmediate()** are only executed after all the open callbacks are executed.
7. When the current iteration of event loop is about to end, it executes all **close event callbacks**.
8. Node JS keeps track of all the open event listeners registered. And when the (registered open event listeners)**refs** == 0, then it exits **process.exit()**. But as we are creating a server and constantly want to listen to incoming requests, this **refs** variable never becomes zero. Every time a new event  listener is registered, this variable is incremented by one. And it is decremented by one, when the event loop completes the execution of an event callback.

![Node JS single thread.svg](Node%20JS%20single%20thread.svg)

* * *




![Event loop.svg](Event%20loop.svg)

- The Node JS runs non-blocking







