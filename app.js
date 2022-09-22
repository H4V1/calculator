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


function operate(operator, a, b) {
    return operator(a, b)
}

let numPressed = document.querySelectorAll('.number');
let displayValue = 0;

numPressed.forEach(num => num.addEventListener('click', (e) => {
    displayValue = Number(document.querySelector('#result').textContent = e.target.value);
}))

