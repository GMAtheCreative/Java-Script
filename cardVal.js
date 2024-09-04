function cardNumber (numbers){
	if(numbers.charAt(0) == 4 || numbers.charAt(0) == 5 || numbers.charAt(0) == 6){
		let indexOfNumbers = 0;
		for(let index in numbers){
			if(!isNaN(numbers[index])){
				indexOfNumbers ++;
			}
		}
		return "valid card";
	}
	else{
		return "invalid card"
	}
}



console.log(cardNumber("4234-5678-9012-3456"));