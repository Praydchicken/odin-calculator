const buttonsElement = document.querySelector('.js-buttons');
const inputElement = document.querySelector('.js-input');

const OPERATORS = ['+', '-', '*', '/'];

let currentInput = '0';
let operator = '';

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
	}
});

function handleNumbers(number) {
	if (number === '.' && currentInput.includes('.')) {
		console.log('Already have decimals');
		return;
	}

	if (currentInput === '0') {
		currentInput = number;
	} else {
		currentInput += number;
	}

	console.log(`current input: ${currentInput}`);
	updateInputDisplay(currentInput);
}

function handleOperators(operatorSign) {
	operator = operatorSign;
}

function handleBackSpace() {
	if (currentInput.length > 1) {
		currentInput = currentInput.slice(0, -1);
	} else {
		currentInput = '0';
	}

	updateInputDisplay(currentInput);
}

function handleDelete() {
	currentInput = '0';
	updateInputDisplay(currentInput);
}

function updateInputDisplay(input) {
	inputElement.textContent = input;
}
