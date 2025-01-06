let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (previousInput === '' || currentInput === '' || operator === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}