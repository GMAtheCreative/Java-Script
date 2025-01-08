const addOneToArray = require ("./arrayLesson.js");
let arrayOne = [9,9,9];
let arrayTwo = [2,3,4];

test("test that function can add only 1 to the array and still let the array retain just one unit", ()=>{
    let result = addOneToArray(arrayOne);
    let expected = [1,0,0,0];
    expect(result).teEqual(expected);
});