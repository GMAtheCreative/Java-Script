function extract(theObject){
	let theExtracted = theObject.title +" "+"by"+" "+ theObject.author;
	console.log(theExtracted);
	return theExtracted;
};

function extractWithloop(theObject){
	let theExtracted = "";
	for(let keyPair in theObject){
		theExtracted += keyPair +": "+ theObject[keyPair]+", ";
		console.log(theExtracted);
	}
	
	return theExtracted.trim();
}

function getFNandLN(theObject){
	let theExtracted = theObject.firstName +" "+ theObject.lastName;
	return theExtracted;
}

function keyAndValue(theObject){
	let theExtracted = `First Name: ${theObject.firstName}, Last Name: ${theObject.lastName}, Age: ${theObject.age}`;
	return theExtracted;
}

module.exports = {extract, extractWithloop, getFNandLN, keyAndValue};