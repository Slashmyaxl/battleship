import './styles.css';

const { renderDisplay } = require('./display');
const gameplay = require('./gameplay');

const startButton = document.querySelector('button#start')

renderDisplay();
gameplay();

startButton.addEventListener('click', () => gameplay().startGame())