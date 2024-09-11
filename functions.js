function oddEvenArray(number){
	evenCount = 0;
	oddCount = 0;
	for (numbers in number){
		if (numbers % 2 == 0){
			evenCount += 1; 
		}
		else{
			oddCount += 1;	
		}
	}
	return [evenCount, oddCount];
}

console.log(oddEvenArray([4, 1, 5, 7, 9]));