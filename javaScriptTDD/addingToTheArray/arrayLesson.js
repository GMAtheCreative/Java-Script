function addOneToArray(theArray){
    let divided = 0;
    let newArray =[];
    for (index = theArray.length; index >= 0; index-- ){
        let one = addOne(theArray, index)
        let temp = Sring (one)
        if (temp.length == 2){
            let newTemp = Number(temp);
            divided = newTemp / 10;
            let remainder = newTemp % 10;
            newArray.unshift(remainder);
        }
        else{
            newArray.unshift(one)
        }
    }
    return newArray
}

function addOne (theArray, index){
    let one = 0
    if (index == theArray.length-1){
        one += theArray[index] + 1;
    }
    else{
        one += theArray[index]; 
    }
    return one;
}
module.exports = addOneToArray;