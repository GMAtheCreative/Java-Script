const {extract, extractWithloop, getFNandLN, keyAndValue} = require("./DictionaryWork.js");
	const person = {
			firstName: "John",
			lastName: "Doe",
			age: "25"
			};

test("to return the destructured object by the key provided", ()=>{
	const book = {
			title : "The Great Gatsby",
			author : "F.Scott Fitzgerald",
			yearPublished : 1925
		      };

	let result = extract(book);
	let expected = "The Great Gatsby by F.Scott Fitzgerald";
	expect(result).toBe(expected);
});

test("to return the key and its value", ()=>{
	const car = {
		make: "Toyota",
		model: "Camry",
		year: 2021
		     };

	let result = extractWithloop(car);
	let expeted = "make: Toyota, model: Camry, year: 2021,";
	expect(result).toBe(expeted);
});

test("to return first namw and last name combined", ()=>{
	let result = getFNandLN(person);
	let expected = "John Doe";
	expect(result).toBe(expected);
});

test("to return the key and value", ()=>{
	let result = keyAndValue(person);
	let expected = "First Name: John, Last Name: Doe, Age: 25";
	expect(result).toBe(expected)
})
