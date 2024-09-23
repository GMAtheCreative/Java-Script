function add(arrayNumbers){
    let newArray = [];
    for(let number = 0; number < arrayNumbers.length; number+=2){
        let tempNumber = arrayNumbers[number] + arrayNumbers[number + 1];
        newArray.push(tempNumber);
    }
    console.log("newArray");
    return newArray;
}
function arrayToObjects(array) {
    let result = {};
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (value in result){
            result[value]++;
        }
        else{
            result[value] = 1;
        }
    }
    return result;
}
function filteredScore(array){
    const result = array.filter((score)=>score >= 70);
    return result;
}
function addedScore(array){
    return array.map((number)=>number + 5);
}
function squaredNumber(array){
    return array.map((number)=> number * number);
}
function distributedBook(person,books){
    let library = {};
    let bookCount = 0;
    for(let list of person){
        library[list] = books[bookCount];
        bookCount++;
    }
    return library;
}
function filteredTime(array){
    let permmision = 'PM'
    let result = array.filter((element)=> element.includes(permmision));
    return result;
}
function addAll(objects){
    let result = 0;
    for(let index in objects){
        result += objects[index]; 
    }
    return result;
}


module.exports = {add, arrayToObjects,filteredScore,addedScore,squaredNumber,distributedBook,filteredTime,addAll};