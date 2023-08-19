/**Importing snakeSpeed, update as updateSnake, draw as drawSnake 
 * from snake.js file */
import { snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js";

/**Importing update as updateFood, draw as drawFood 
 * from snake.js file */
import { update as updateFood, draw as drawFood } from "./food.js";

import { outSideGrid } from "./grid.js";
/**Setting Up a Game Loop function which will repeat itself over and over 
 * again in a set interval so that we can constantly update the render. 
 * Constantly updating our snake position, snake food, snake moves and game
 * calculations
  */

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-Board");
//const snakeSpeed = 2;
/**This function will take in the current time. The exact timestamp when the
 * function runs. Inside of this function we have that current time and we want
 * to recall this main function essentially immediately so that we can set up
 * another loop which will going to happen after this. So essentially we will
 * get a forever loop 
 */
function main(currentTime) {
  if (gameOver) {
    //return alert("You Lose!");
    if (confirm("You lost. Press OK to restart.")) {
       //window.location = "/";
      location.reload();
    }
    return;
  }
  window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {
     return;
}
//console.log("Render");
    lastRenderTime = currentTime;
   // console.log("Current time is " +secondsSinceLastRender);
    update();
    draw();
}

/**It basically requests the browser when it can render the next frame.
     * We are requesting a frame to animate the game and this is going to 
     * tell us what the current time is and when we are going to render the
     * frame.
     */
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  /** Setting innerHTML = ""  as an empty string so that when the snake 
   * moves it does not show, mark or draw any previous pieces or places 
   * it used to be. So it only moves to a new postion with the actual body
   * but when it leaves the previous postion the previous position becomes 
   * empty until the snake revisitis the place.
  */
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
