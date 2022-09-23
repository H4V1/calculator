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
const display = document.querySelector('#display');
const equalKey = document.querySelector('.equal');
const clearKey = document.querySelector('.clear');

let a = 0;
let b = 0
let result = 0;
let operator;
let numArr = [];

// document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', (e) => {
//     display.push(e.target.textContent);
//     result.textContent = display.join('');
// }));

numPressed.forEach(num => num.addEventListener('click', (e) => {
    let value = e.target.value;

    if(a > 0) {
        b = Number(value);
        display.textContent = b;
    } else {
        a = Number(value);
        display.textContent = a;
    }
}));

operatorPressed.forEach(op => op.addEventListener('click', (e) => {
    operator = e.target.value;
    
}))

equalKey.addEventListener('click', () => {
    display.textContent = operate(operator, a, b);
});

clearKey.addEventListener('click', () => {
    a = 0
    b = 0
    numArr = [];
    display.textContent = 0;
})


