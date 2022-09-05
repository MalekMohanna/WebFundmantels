var number1;
var number2;
var operator;
var currentNumber = "";

function getDisplay() {
return document.getElementById("display");
}


function press(number) {
    currentNumber += parseFloat(number);
    console.log(number1, number2);

    if(operator) {
        number2 = parseFloat(currentNumber);
    } else {
        number1 = parseFloat(currentNumber);
    }

    getDisplay().innerText = currentNumber;
}


function setOP (op) {
    operator = op;
    currentNumber = "";
    getDisplay().innerText = "0";
}


function clr() {
    number1 = "0";
    number2 = "0";
    currentNumber = "";
    operator = undefined;
    getDisplay().innerHTML = "0";
}


function calculate() {
    var result;

    if(operator === "+") {
        result = number1 + number2;

    } else if (operator === "-") {
        result = number1 - number2;

    } else if (operator === "/") {
        result = number1 / number2;

    } else if (operator === "*") {
        result = number1*number2;

    }
    console.log(number1, number2);
    getDisplay().innerText = result;
}