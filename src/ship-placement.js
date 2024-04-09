const Ship = require('./ship');
const Display = require('./display');

const allShips = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
let placementPhase = true;
function startPlacementPhase () { placementPhase = true }
const placementPhaseOver = () => !placementPhase

function placeShips (board) {
  const ships = document.querySelectorAll('.ship')
  ships.forEach(ship => {
    ship.onmousedown = function(event) {
      const shipContainer = document.querySelector('.ship-container');
      let orientation = ''
      ship.style.position = 'absolute';
      ship.style.zIndex = 10;
  
      function moveAt(pageX, pageY) {
        ship.style.left = pageX - ship.offsetWidth / 7 + 'px';
        ship.style.top = pageY - ship.offsetHeight / 2 + 'px';
      }
  
      moveAt(event.pageX, event.pageY);
  
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
      }
  
      document.addEventListener('mousemove', onMouseMove);
      window.addEventListener('keydown', (e) => {
        if (e.key === 'r' && orientation === 'vertical') orientation = ''
        else orientation = 'vertical'
      })
  
      ship.onmouseup = (event) => {
        ship.style.display = "none";
        const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ship.style.display = "flex";
        document.removeEventListener('mousemove', onMouseMove)
        if(!elemBelow.classList.contains('droppable')) return;        
        const placedShip = board.placeShip(Ship(ship.id), elemBelow.dataset.column, elemBelow.dataset.row, orientation);
        if (placedShip === true) {
          Display.p1UpdateBoard(board);
          shipContainer.removeChild(ship);
          Display.updateMarquee('Place your ships by dragging them onto your board (press R to rotate).', 20)
          if (!shipContainer.hasChildNodes()) {
            placementPhase = false;
            Display.updateMarquee("You're up, Admiral! Choose a cell on your opponent's board to attack.", 20)
          }
        } else {
        Display.updateMarquee(placedShip, 24);
        }
      }
    }
  });
}

function placeRandomShips (board) {
    board.placeShip(Ship(allShips[0]), 'A', 2);
    board.placeShip(Ship(allShips[1]), 'B', 10);
    board.placeShip(Ship(allShips[2]), 'J', 1, 'vertical');
    board.placeShip(Ship(allShips[3]), 'E', 5, 'vertical');
    board.placeShip(Ship(allShips[4]), 'H', 1, 'vertical');
  }

module.exports = { placeShips, placeRandomShips, startPlacementPhase, placementPhaseOver };