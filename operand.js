function ans (leftOperand, operator, rightOperand){
    let result = operator == "*" ? leftOperand * rightOperand : operator == "+"
        ? leftOperand + rightOperand : operator == "-"
        ? leftOperand - rightOperand : operator == "/"
        ? leftOperand / rightOperand : NaN
    return result
}
let newResult = ans(10, "/", 13);
console.log(newResult)