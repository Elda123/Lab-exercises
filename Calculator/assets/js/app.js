var choice,
    number1,
    number2,
    numberOfOperands;
let operands = new Array();
function ask13() {
    numberOfOperands = prompt("how many numbers you want to operate?");
    for (let i = 0; i < parseInt(numberOfOperands); i++) {
        operands[i] = prompt("Enter a number: ");
    }
}
function ask24() {
    number1 = prompt("enter the fist number:");
        number2 = prompt("enter the second number:");
}
function addition(operands) {
    ask13();
    let sum = 0, print = "";
    operands.forEach(function (operand) {
        sum += parseInt(operand);
        print += " + " + operand;
    })
    console.log(print + " is " + sum);
}
function subtraction(number1, number2) {
    return number1 - number2;
}
function multiplication(operands) {
    ask13();
    let result = 1, print = "";
    operands.forEach(function (operand) {
        result *= parseInt(operand);
        print += " * " + operand;
    })
    console.log(print + " is " + result);
}
function division(number1, number2) {
    if (number2 != 0) {
        return number1 / number2;
    }
    else return "divisor cannot be zero";
}
(function () {
    choice = prompt(`choose which operation you want to solve: 
                                          1.addition               2.subtraction 
                                          3.multiplication         4.division `);
    if (choice == "2") {
        ask24();
        console.log(number1 + " - " + number2 + " is " + subtraction(number1, number2));
    }
    else if (choice == "3"){
        multiplication(operands);
    }
    else if (choice == "1") {
        addition(operands);

    }
    else if (choice == "4") {
        ask24();
        console.log(division(number1, number2));
    }

})();