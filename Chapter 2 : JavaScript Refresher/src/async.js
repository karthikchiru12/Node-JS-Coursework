// setTimeout(() => {
//     console.log("Inside setTmeout");
// }, 2000);
// console.log("Hello");
// console.log("World");

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