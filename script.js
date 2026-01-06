const buttonsElement = document.querySelector('.js-buttons');
const inputElement = document.querySelector('.js-input');
const equationElement = document.querySelector('.js-equation');

const OPERATORS = ['+', '-', '*', '/'];

let currentInput = '0';
let operator = '';
let previousInput = '0';

buttonsElement.addEventListener('click', (event) => {
	const button = event.target.closest('button');

	if (!button) {
		return;
	}

	const val = button.textContent;

	if (!isNaN(Number(val)) || val === '.') {
		handleNumbers(val);
	} else if (val === 'CE') {
		handleBackSpace();
	} else if (val === 'AC') {
		handleDelete();
	} else if (OPERATORS.includes(val)) {
		handleOperators(val);
	} else if (val === '=') {
		handleEquals();
	}
});

function handleNumbers(number) {
	if (number === '.' && currentInput.includes('.')) {
		console.log('Already have decimals');
		return;
	}

	if (currentInput === '0' || currentInput === 'Error') {
		currentInput = number;
	} else {
		currentInput += number;
	}

	console.log(`current input: ${currentInput}`);
	updateInputDisplay(currentInput);
}

function calculate(leftOperand, rightOperand) {
	if (operator === '+') return leftOperand + rightOperand;
	if (operator === '-') return leftOperand - rightOperand;
	if (operator === '*') return leftOperand * rightOperand;
	if (operator === '/') return rightOperand === 0 ? 'Error' : leftOperand / rightOperand;
}

function handleOperators(operatorSign) {
	if (operator !== '' && currentInput === '0') {
		operator = operatorSign;
		updateEquationDisplay();
		return;
	}

	if (previousInput !== '0') {
		currentInput = calculate(parseFloat(currentInput), parseFloat(previousInput));
	}

	operator = operatorSign;
	previousInput = currentInput;
	currentInput = '0';

	updateEquationDisplay();
	updateInputDisplay(currentInput);
}

function handleEquals() {
	if (!operator) {
		console.log('Incomplete expression');
		return;
	}
	currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput));
	previousInput = '0';
	operator = '';

	updateEquationDisplay()
	updateInputDisplay(currentInput);
}

function handleBackSpace() {
	if (currentInput === 'Error' || currentInput.length === 1) {
    currentInput = '0';
	} else {
    currentInput = currentInput.slice(0, -1);
	}

	updateInputDisplay(currentInput);
}

function handleDelete() {
	currentInput = '0';
	previousInput = '0';
	operator = '';

	updateEquationDisplay();
	updateInputDisplay(currentInput);
}

function updateInputDisplay(input) {
	inputElement.textContent = input;
}

function updateEquationDisplay() {
	equationElement.textContent = `${previousInput} ${operator}`;
}
