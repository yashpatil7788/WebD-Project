const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let num1 = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            const num2 = parseFloat(currentInput);
            fetch('/api/calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ num1, num2, operator }),
            })
                .then(res => res.json())
                .then(data => {
                    display.value = data.result;
                    currentInput = '';
                    operator = '';
                    num1 = null;
                })
                .catch(err => console.error(err));
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            num1 = parseFloat(currentInput);
            currentInput = '';
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});