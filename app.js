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
    a = [];
    b = [];
    numArr = [];
    result = 0;
    operator = null;
}

const numPressed = document.querySelectorAll('.number');
const operatorPressed = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equalKey = document.querySelector('.equal');
const clearKey = document.querySelector('.clear');

let a = [];
let b = [];
let result = 0;
let operator = null;
let numArr = [];

numPressed.forEach(num => num.addEventListener('click', (e) => {
    let value = e.target.value;
    display.textContent = value;
    if(operator !== null) {
        b.push(Number(value));
    } else {
        a.push(Number(value));
    }
}));

operatorPressed.forEach(op => op.addEventListener('click', (e) => {
    operator = e.target.value;
    if(result > 0) {
        a = result;
        b = [];
    }
}))

equalKey.addEventListener('click', () => {
    if(typeof a === 'object'){
        a = Number(a.join(''));
    }
    
    if(a > 0 && operator === 'divide') {
        display.textContent = 'lol';
        resetValues();
        return 
    }

    if(typeof a === 'object' || typeof b === 'object' && operator === null) {
        resetValues();
        return
    }
    b = Number(b.join(''));
    result = operate(operator, a, b);
    display.textContent = Math.round(result);
});

clearKey.addEventListener('click', () => {
    display.textContent = 0;
    resetValues();
});