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

const numPressed = document.querySelectorAll('.number');
const operatorPressed = document.querySelectorAll('.operator');
const display = document.querySelector('#result');
const equalKey = document.querySelector('.equal');
let displayValue = 0
let numbers = [];




let a = 0;
let b = 0
let operator;

numPressed.forEach(num => num.addEventListener('click', (e) => {
    let value = e.target.value;

    if(a > 0) {
        b = Number(value);
    } else {
        a = Number(value);
    }
}));

operatorPressed.forEach(op => op.addEventListener('click', (e) => {
    operator = e.target.value;
    console.log(`${operator}`);
    
}))

equalKey.addEventListener('click', () => {
    operate(operator, a, b)
});


