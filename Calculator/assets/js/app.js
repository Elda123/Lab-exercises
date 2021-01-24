var choice,
    number1,
    number2;
function subtraction(number1, number2) {
    return number1 - number2;
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
    if (choice == "2"){
        number1 = prompt("enter the fist number:");
        number2 = prompt("enter the second number:");
        console.log(number1 + " - " + number2 + " is " + subtraction(number1,number2));
    } 
    if (choice == "4"){
        number1 = prompt("enter the fist number:");
        number2 = prompt("enter the second number:");
        console.log(division(number1,number2));
    }                                     

})();