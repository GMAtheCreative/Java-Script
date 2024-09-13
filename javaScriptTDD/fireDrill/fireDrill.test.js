const {sumEvenNumbers, findMax, countOddNumbers,isPrime, findFirstDuplicate} = require("./fireDrill.js");

let arrayOfNumbers = [1,2,3,4,5,12];


test("to return sum of even numbers", ()=>{ 
	let result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(18);
});



test("to return the largest number in the array", ()=>{
	let result = findMax(arrayOfNumbers);
	expect(result).toBe(12);
});

test("to return the count of odd numbers", ()=>{
	let result = countOddNumbers(arrayOfNumbers);
	expect(result).toBe(3);
});

test("to return if number is prime number", ()=>{
	let result = isPrime(5);
	expect(result).toBe(true);
});

test("to return the first duplicate", ()=>{
	let result = findFirstDuplicate([9,12,2,3,4,1,2,7,8]);
	expect(result).toEqual([2]);
});

test("to return the first duplicate if we have mone than two duplicate",()=>{
	let result = findFirstDuplicate([9,9,2,2,1,5,1,0,5,8,4]);
	let expected = [9,2,1,5];
	expect(result).toEqual(expected);
});

test ("to return -1 if no duplicate is found", ()=>{
	let result = findFirstDuplicate([12,3,4,1,2,7,8]);
	expect(result).toBe(-1);

});

	