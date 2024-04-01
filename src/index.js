import './styles.css';

const renderDisplay = require('./display');
const gameplay = require('./gameplay');

const startButton = document.querySelector('button#start')

gameplay();
renderDisplay();

startButton.addEventListener('click', () => gameplay().startGame())