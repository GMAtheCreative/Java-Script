const {sumEvenNumbers, findMax, countOddNumbers,isPrime, findFirstDuplicate, reverseArray, factorial, isPalindrome, sumMultipleOfThreeAndFive, isLeapYear} = require("./fireDrill.js");

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

test("to return the reverse of an array", ()=>{
	let result = reverseArray([1,2,3,4,5,5,6,7]);
	let expected = [7,6,5,5,4,3,2,1]
	expect(result).toEqual(expected);
});

test("to return the factorial of a number", ()=>{
	let result = factorial(5);
	expect(result).toBe(120);
});

test("to return true if the word is palindrome", ()=>{
	let result = isPalindrome("racecar");
	expect(result).toBe(true);
});

test("to return the sum of the multiple of a given number", ()=>{
	let result = sumMultipleOfThreeAndFive(25)
	expect(result).toBe(15);
});

test("to return true if the year inputed is a leap year", ()=>{
	let result = isLeapYear("2020")
	expect(result).toBe(true);
});

