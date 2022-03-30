// const http = require('http');

// function requestListener(request, response)
// {
// 	console.log("Server is up!");
// 	console.log(req); //to see what data is in request
// }

// http.createServer(requestListener);

const http = require('http');

function requestListener(request, response)
{
	console.log("Server is up!");
	console.log(request); //to see what data is in request
	//process.exit(); // which unregisters the event listener
}

const server = http.createServer(requestListener);

server.listen(3000);