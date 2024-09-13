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


module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate};

