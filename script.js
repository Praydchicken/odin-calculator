const buttonsElement = document.querySelector('.js-buttons');
const inputElement = document.querySelector('.js-input');

let currentInput = '0';

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
	updateDisplay(currentInput);
}

function handleBackSpace() {
	if (currentInput > 1) {
		currentInput = currentInput.slice(0, -1);
	} else {
		currentInput = '0';
	}

	updateDisplay(currentInput);
}

function updateDisplay(input) {
	inputElement.textContent = input;
}
