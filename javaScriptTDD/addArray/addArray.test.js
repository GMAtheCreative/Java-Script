const {add,arrayToObjects,filteredScore,addedScore,squaredNumber,distributedBook,filteredTime,addAll} = require("./addArray.js");
    let array1 = [2,3,4,5,6,7];
    let array2 = [1,3,5,1,6,3];
    test("that function can add first index and last index of an array",()=>{
        let result = add(array1);
        let expected = [5,9,13];
        expect(result).toEqual(expected);
});
test("that i pass in an array and it returns an object of concorent numbers", ()=>{
    let input = [1,1,2,3,2];
    let result = arrayToObjects(input);
    let expected = {"1":2, "2":2, "3":1};
    expect(expected).toEqual(result);
});
test("that function return the filtered score", ()=>{
    let testScore = [70,80,60,30,];
    let result = filteredScore(testScore)
    let expected = [70,80];
    expect(result).toEqual(expected);
});
test("to return 5points added to each score", ()=>{
    let testScore = [70,80,60,30,];
    let result = addedScore(testScore);
    let expected = [75,85,65,35,];
    expect(result).toEqual(expected);
});
test("to retun the squarre of all numbr",()=>{
    let number = [2,4,6,8,10]
    let result = squaredNumber(number);
    let expected = [4,16,36,64,100];
    expect(result).toEqual(expected);
});
test("to return an object of books",()=>{
    let  person = ["Emily","Jack","Sophia","Daniel"];
    let book = ["Ditel","Eloquent","Act","Bible"];
    let result = distributedBook(person,book);
    let expected = {"Emily":"Ditel","Jack":"Eloquent","Sophia":"Act","Daniel":"Bible"};
    expect(result).toEqual(expected)
});
test("to filter afternoon class",()=>{
    let time = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"];
    let result = filteredTime(time)
    let expected = ["1:00 PM","3:00 PM","5:00 PM"];
    expect(result).toEqual(expected);
});
test("to return the the sum of the expenses of david",()=>{
    let expenses = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let result = addAll(expenses);
    let expected = 380;
    expect(result).toBe(expected);
});