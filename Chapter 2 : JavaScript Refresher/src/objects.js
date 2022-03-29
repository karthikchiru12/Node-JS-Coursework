const obj = {
	property1 : 10,
	property2 : "Shiva",
	property3 : () => {
		console.log("property3 "+this.property2);
	}
}

obj.property3();

const obj1 = {
	property1 : 10,
	property2 : "Shiva",
	property3 : function() {
		console.log("property3 "+this.property2);
	}
}

obj1.property3();


const obj2 = {
	property1 : 10,
	property2 : "Shiva",
	property3 () {
		console.log("property3 "+this.property2);
	}
}

obj2.property3();