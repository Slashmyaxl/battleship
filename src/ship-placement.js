/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
const Ship = require("./ship");
const Display = require("./display");
const { cols } = require("./conversions");

const allShips = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
let placementPhase = true;
function startPlacementPhase() {
  placementPhase = true;
}
const placementPhaseOver = () => !placementPhase;

function placeAllShips(board) {
  const shipsContainer = document.querySelector('.ships-container');
  const ships = document.querySelectorAll(".ship");
  const placedShips = [];
  ships.forEach((ship) => {
    ship.onmouseover = shiftShip;
    ship.onmouseout = () => {
      ship.style.transform = '';
    }

    function shiftShip() {
      ship.style.transform = 'translate(-1px, -2px)';
    }
    ship.onmousedown = function (event) {
      const shipContainer = document.querySelector(`#${ship.id}-container`);
      let orientation = "";
      ship.style.transform = '';
      ship.onmouseover = null;
      ship.style.position = "absolute";
      ship.style.zIndex = 10;

      function moveAt(pageX, pageY) {
        ship.style.left = pageX - 20 + "px";
        ship.style.top = pageY - ship.offsetHeight / 2 + "px";
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event2) {
        moveAt(event2.pageX, event2.pageY);
      }

      function rotateShip(event3) {
        if (event3.key === "r" && orientation !== "vertical") {
          orientation = "vertical";
          ship.classList.add("rotated");
        } else {
          orientation = "";
          ship.classList.remove("rotated");
        }
      }

      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("keydown", rotateShip);

      ship.onmouseup = (event4) => {
        ship.style.display = "none";
        const elemBelow = document.elementFromPoint(
          event4.clientX,
          event4.clientY,
        );
        ship.style.display = "flex";
        document.removeEventListener("mousemove", onMouseMove);
        if (!elemBelow.classList.contains("droppable")) {
          ship.style.position = "static";
          ship.classList.remove("rotated");
          ship.onmouseover = shiftShip;
          window.removeEventListener("keydown", rotateShip);
          return;
        }
        const placedShip = board.placeShip(
          Ship(ship.id),
          elemBelow.dataset.column,
          elemBelow.dataset.row,
          orientation,
        );
        if (placedShip === true) {
          Display.p1UpdateBoard(board);
          placedShips.push(ship.id);
          console.log(placedShips)
          shipContainer.removeChild(ship);
          Display.updateMarquee(
            "Place your ships by dragging them onto your board (press R to rotate).",
            20,
          );
          if (placedShips.length === allShips.length) {
            shipsContainer.style.display = 'none';
            placementPhase = false;
            Display.updateMarquee(
              "You're up, Admiral! Choose a cell on your opponent's board to attack.",
              20,
            );
          }
        } else {
          ship.style.position = "static";
          ship.classList.remove("rotated");
          window.removeEventListener("keydown", rotateShip);
          Display.updateMarquee(placedShip, 24);
          ship.onmouseover = shiftShip;
        }
      };
    };
  });
}

function placeRandomShips(board, index = 0) {
  if (index >= allShips.length) return;
  const orientation = ["horizonal", "vertical"][Math.floor(Math.random() * 2)];
  const col = cols[Math.floor(Math.random() * 10)];
  const row = Math.floor(Math.random() * 10) + 1;
  const placedShip = board.placeShip(
    Ship(allShips[index]),
    col,
    row,
    orientation,
  );
  if (placedShip === true) placeRandomShips(board, ++index);
  else placeRandomShips(board, index);
}

module.exports = {
  placeAllShips,
  placeRandomShips,
  startPlacementPhase,
  placementPhaseOver,
};
