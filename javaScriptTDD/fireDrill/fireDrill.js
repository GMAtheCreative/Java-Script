function sumEvenNumbers(arrayOfNumbers){
	let sumOfEvenNumber = 0;
	for(let numbers of arrayOfNumbers){
		if(numbers % 2 == 0){
			sumOfEvenNumber += numbers;
		}
	}
	return sumOfEvenNumber;
}

function findMax(arrayOfNumbers){
	let largestNumber = 0;
	for(let index of arrayOfNumbers){
		if(index > largestNumber){
			largestNumber = index;
		}
	}
	return largestNumber;
}

function countOddNumbers(arrayOfNumbers){
	let countOfOddNumbers = 0;
	for(let number of arrayOfNumbers){
		if(number % 2 != 0){
			countOfOddNumbers++;
		}
	}
	return countOfOddNumbers;
}

function isPrime(number){
	let prime = false;
	for (let index = 1; index <= number; index++){
		if(number % index == 0){
			prime = true;
		}
	}
	return prime;
}

function findFirstDuplicate(arrayOfNumbers){
	let firstDuplicate =[];
	for (let index = 0; index < arrayOfNumbers.length; index++){
		for(let values = index + 1; values < arrayOfNumbers.length; values++){
			if(arrayOfNumbers[index] == arrayOfNumbers[values]) {
				firstDuplicate.push(arrayOfNumbers[index]);
			}
		}
	}
	if (firstDuplicate.length > 0){
		return firstDuplicate;
	}
	
	else{
		return -1;
	}
}

function reverseArray (arrayOfNumbers){
	let reverseOfArray = [];
	for(let number = arrayOfNumbers.length - 1; number >= 0; number--){
		reverseOfArray.push(arrayOfNumbers[number]);
	}	
	return reverseOfArray;
}

function factorial(number){
	let theFactorials = 1;
	for(let counter = 1; counter <= number; counter++){
		theFactorials *= counter
	}
	return theFactorials;
}

function isPalindrome(word){
	let reverseOfWord =""; 
	for(let character = word.length - 1; character >= 0; character--){
		reverseOfWord = reverseOfWord + word[character];
	}
	if(word == reverseOfWord){
		return true;
	}
	else{
		return false;
	}
}

function sumMultipleOfThreeAndFive(number){
	let numberMultiple = 0;
	for(let counter = 1; counter <= number -1; counter++){
		if (counter % 3 == 0 && counter % 5 == 0){
			numberMultiple += counter;
		}
	}
	return numberMultiple;
}

function isLeapYear(year){
	let yearNum = Number(year);
	if(yearNum % 4 == 0){
		return true;
	}
	return false;
}

module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverseArray,factorial, isPalindrome, sumMultipleOfThreeAndFive,isLeapYear};



