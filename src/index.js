import './styles.css';

const Display = require('./display');
const gameplay = require('./gameplay');

const startButton = document.querySelector('button#start')

Display.renderDisplay();

console.log(Display);

startButton.addEventListener('click', () => gameplay())