import './styles.css';

const Display = require('./display');
const Game = require('./gameplay');

const startButton = document.querySelector('button#start')

Display().renderBoards();

startButton.addEventListener('click', Game)