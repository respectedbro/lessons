'use strict'

const button = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const sqrButton = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

button.addEventListener('click', function() {
	square.style.backgroundColor = input.value;
	input.value = '';
})

sqrButton.style.display = 'none';

const resize = (event) => {
	span.textContent = event.target.value;
	circle.style.width = span.textContent + '%';
	circle.style.height = span.textContent + '%';
}
range.addEventListener('input', resize);





