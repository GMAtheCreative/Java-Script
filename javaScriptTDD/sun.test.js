const {add, subtract, evenNumbers} = require("./sun.js");
let numberOne = 2;
let numberTwo = 29;

test("add two numbers", ()=>{
	let numberOne = 2;
	let numberTwo = 29;

	let result = add(numberOne, numberTwo);
	let expected = 31;
	expect(expected).toBe(result);
})

test ("subtract two numbers", ()=>{
	let result = subtract(numberTwo, numberOne);
	let expected = 27;
	expect(result).toBe(expected);
})

test("arrAy of even numbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arrayOfNumbers);
	expect(result).toEqual([2,4,6])
})