function MyArray(arrayOfNumbers){
	minNumber = arrayOfNumbers[0];
	maxNumber = arrayOfNumbers[0];
	for(let index = 1; index < arrayOfNumbers.lenght; index++){
		if(arrayOfNumbers[index] > maxNumber && arrayOfNumbers[index] > arrayOfNumbers[index + 1]){
			maxNumber = arrayOfNumbers[index];
		}
		if(arrayOfNumbers[index] < minNumber && arrayOfNumbers[index] < maxNumber){
			minNumber = arrayOfNumbers[index];
		}
	}

	return [minNumber, maxNumber];
}


console.log(MyArray([2,3,6,7,8]))