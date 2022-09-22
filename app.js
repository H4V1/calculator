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

console.log(numPressed);

numPressed.forEach(num => num.addEventListener('click', (e) => {
    document.querySelector('#result').textContent = e.target.value
}))

