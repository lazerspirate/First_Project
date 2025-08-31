const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
const operatorButtons = document.querySelectorAll('#plus, #minus, #multiply, #divide');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    display.value = currentNumber;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentNumber !== '') {
      previousNumber = currentNumber;
      currentNumber = '';
      currentOperator = button.id;
    }
  });
});


equalsButton.addEventListener('click', () => {
  if (currentNumber !== '' && previousNumber !== '') {
    let result;
    switch (currentOperator) {
      case 'plus':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case 'minus':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case 'multiply':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case 'divide':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      default:
        result = 0;
    }
    display.value = result;
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
  }
});

clearButton.addEventListener('click', () => {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  currentOperator = '';
});

deleteButton.addEventListener('click', () => {
  if (currentNumber !== '') {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
  }
});
