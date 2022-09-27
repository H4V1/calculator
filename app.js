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
    return newFunction(a, b).toFixed(2);
};

function resetValues() {
    numValue = [];
    numA = 0;
    numB = 0;
    result = 0;
    operator = null;
}

const display = document.querySelector('#display');
const displayTop = display.querySelector('.top');
const displayBottom = display.querySelector('.bottom')
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('#operators');
const equalKey = document.querySelector('.equal');
const clearKey = document.querySelector('.clear');

let numValue = [];
let numA = 0;
let numB = 0;
let result = 0;
let operator = null;

buttons.forEach(element => element.addEventListener('click', (e) => {
    let value = e.target.value;
    let valueClass = e.target.attributes.class.value;
    
    //display numbers and operators

    if(valueClass === 'number') {
        display.textContent += value;
        numValue.push(value);   
    }
    
    if(operator !== null) {
        numB = Number(numValue.join(''));
    } else {
        numA = Number(numValue.join(''));
    }
    
    if(valueClass === 'float') {
        if(numValue.includes('.')) {
            return
        } else {                                                          //float
            numValue.push(e.target.textContent);
            display.textContent += e.target.textContent;
        }
    }

    if(valueClass === 'backspace') {                                
        display.textContent = display.textContent.slice(0, -1);         //backspace    
        numValue.pop();
    }
         
    if(numA > 0 && numB > 0 && valueClass === 'operator') {
        result = operate(operator, numA, numB);
        numA = result;                                                              //operators
        display.textContent = result;
    } else if(numA > 0 && numB === 0 && value === 'divide') {
        display.textContent === "Don't do that :(";
    } else if (operator !== null){
        return
    }

    if (valueClass === 'operator') {
        display.textContent += e.target.textContent;
        operator = value;
        numValue = [];
    }
}));

equalKey.addEventListener('click', () => {
    if(numA === 0 && numB === 0 && operator === null) {
        return
    } else {
        result = operate(operator, numA, numB);
        if(result === Infinity) {
            display.textContent = "Don't do that :(";
        } else {
            display.textContent = result;
            resetValues();
            numA = Number(display.textContent);
            numValue = Array.from(display.textContent);
        }
    }
});

clearKey.addEventListener('click', () => {
    display.textContent = '';
    resetValues();
});