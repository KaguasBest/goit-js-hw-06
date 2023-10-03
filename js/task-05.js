// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('keydown', changeValue);

function changeValue() {
  const result = input.value;
  if (result === '') {
    return (output.textContent = 'Anonymous');
  }
  output.textContent = result;
}
