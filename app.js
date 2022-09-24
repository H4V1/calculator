//basic operations
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


function operate(op, a, b) {
    //this call a function from a string, in this case the value of a button
    let newFunction = window[op];
    if(typeof newFunction === 'function') newFunction(); //if the type of x = function then call the funcion x();
    return newFunction(a, b);
};

function resetValues() {
    numValue = 0;
    numA = 0;
    numB = 0;
    result = 0;
    operator = null;
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('#operators');
const equalKey = document.querySelector('#equal');
const clearKey = document.querySelector('#clear');

let numValue = 0;
let numA = 0;
let numB = 0;
let result = 0;
let operator = null;

buttons.forEach(num => num.addEventListener('click', (e)=> {
    let value = e.target.value;

    if (display.textContent === '0' || display.textContent === '727 When you see it!') {
        display.textContent = value;
    } else if (value === 'backspace' || value === 'backspace' && numB > 0) {
        display.textContent = display.textContent.slice(0, -1);
        numValue = display.textContent;
        numValue = numValue.slice(0, -1);

        if(operator !== null) {
            numB = Number(numValue);
        } 

        return
    } else {
        display.textContent += e.target.textContent;   
    }
}));

numbers.forEach(num => num.addEventListener('click', (e) => {
    if(numValue === 0) {
        numValue = e.target.value;
    } else {
        numValue += e.target.value
    }

    if(operator !== null) {
        numB = Number(numValue);
    }
}));

operators.forEach(op => op.addEventListener('click', (e) => {
    // if(e.target.value === 'backspace') {
    //     return
    // }
    if(numA > 0 && numB > 0) {
        result = operate(operator, numA, numB); 
        display.textContent = result + e.target.textContent;
        numA = result;
    } else if (numB === 0 && operator === 'divide') {
        display.textContent = '727 When you see it!';
    } 
    
    if(operator !== null) {
        numB = Number(numValue);
    } else {
        numA = Number(numValue);
    }
    
    operator = e.target.value;
    numValue = 0;
}));

equalKey.addEventListener('click', () => {
    if(numA === 0 && numB === 0) {
        display.textContent = 0;
        return 
    } else if (numB === 0 && operator === 'divide') {
        display.textContent = '727 When you see it!';
        resetValues();
    } else {
        result = operate(operator, numA, numB)
        display.textContent = result;   
        numA = result;
        numB = 0;
    }
});

clearKey.addEventListener('click', () => {
    display.textContent = 0;
    resetValues();
});