const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
button.addEventListener('click', (e) => {
const value = e.target.textContent;

if (value === 'C') {  
  currentInput = '';  
  display.textContent = '0';  
  return;  
}  

if (value === '=') {  
  try {  
    currentInput = eval(currentInput);  
    display.textContent = currentInput;  
    resultDisplayed = true;  
  } catch {  
    display.textContent = 'Erro';  
  }  
  return;  
}  

if (resultDisplayed && !isNaN(value)) {  
  currentInput = value;  
  resultDisplayed = false;  
} else {  
  currentInput += value;  
}  

display.textContent = currentInput;

});
});
