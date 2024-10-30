let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function inputOperator(op) {
    if (operator && previousInput !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function calculateFactorial() {
    let number = parseInt(currentInput);
    if (isNaN(number) || number < 0) {
        alert("Please enter a non-negative integer.");
        return;
    }
    currentInput = factorial(number).toString();
    updateDisplay();
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function updateDisplay() {
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = null;
    operator = null;
    updateDisplay();
}