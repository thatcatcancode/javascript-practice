//chapter 1 spec

describe("Chapter 1 Specs", function(){

	it("Pages 1 - 16", function(){
		expect(true).toBe(true);
	});

	it("Chapter 1 introduces the two different value types in JavaScript: primitive and reference.", function(){
		expect(true).toBe(true);
	});

	it("There are 5 primitive types: boolean, number, string, null, undefined", function(){
		expect(true).toBe(true);
	});

	it("The best way to identify primitive types is with the typeof operator.", function(){
		var name = "Nicholas";
		expect(typeof name).toBe("string");
		var age = 10;
		expect(typeof age).toBe("number");
		var height = 5.1;
		expect(typeof height).toBe("number");
		var isHealthy = true;
		expect(typeof isHealthy).toBe("boolean");
		var handsome;
		expect(typeof handsome).toBe("undefined");
	});

	it("When it comes to primitive values, when you set one variable equal to another, each variable gets its own copy of the data.", function(){
		var color1 = "red";
		var color2 = color1;
		expect(color1).toBe(color2);

		it("After changing the value of the first variable, the second variable is unaffected.", function(){
			color1 = "blue";
			expect(color1).not.toBe(color2);
		});
	});

	it("Null primitive type returns differently when using the typeof operator.", function(){
		var person = null;
		expect(typeof person).toBe("object");
	});

	it("The best way to determine if a value is null is to compare it against null directly.", function(){
		var person = null;
		expect(person === null).toBe(true);
	});

	it("Triple equals operator (===) does a comparison without coercing the variable to another type.", function(){
		var person = null;
		var panda;
		expect(person === panda).toBe(false);
	});

	it("Double equals operator (==) does a comparision by coercing the variable to another type.", function(){
		var person = null;
		var panda;
		expect(person == panda).toBe(true);
	});

	it("When you assign an object to a variable, you're actually assigning a pointer. " + 
		"That means if you assign one variable to another, each variable gets a copy " +
		"of the pointer, and both still reference the same object in memory.", function(){
			var person = new Object();
			var newPerson = person;
			expect(person === newPerson).toBe(true);
			// it("After adding a property to one of the variables, the two variables still equal each other " + 
			// 	"because they reference the same object in memory.", function(){
					newPerson.name = 'Tim';
					expect(person === newPerson).toBe(true);
				// });

		});

	it("It's best to dereference objects that you no longer need so that the garbage collector can free up that memory. " + 
		"The best way to do this is to set the object variable to null.", function(){
			var person = new Object();
			var person = null;
			expect(person === null).toBe(true);
		});

	it("You can add properties to a JavaScript object at any time, even if you didn't define the original object.", function(){
		var person = new Object();
		person.name = 'Tim';
		expect(person.name === 'Tim').toBe(true);
	});
});