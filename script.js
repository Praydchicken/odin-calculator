const buttonsElement = document.querySelector('.js-buttons');

let currentInput = '';

buttonsElement.addEventListener('click', (event) => {
	const button = event.target.closest('button');

	if (!button) {
		return;
	}

	const val = button.textContent;

	if (!isNaN(Number(val)) || val === '.') {
		handleNumbers(val);
	}
});

function handleNumbers(number) {
	if (number === '.' && currentInput.includes('.')) {
		console.log('Already have decimals');
		return;
	}

	currentInput += number;
	console.log(`current input: ${currentInput}`);
}
