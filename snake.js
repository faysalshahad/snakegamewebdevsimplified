import { getInputDirection } from "./input.js";

export const snakeSpeed = 3;

const snakeBody = [{x:11, y:11}];

let newSegments = 0;

export function update() {
    addSegments();
    /**Importing getInputDirection() function from input.js file */
    const inputDirection = getInputDirection();
    //console.log("Update Snake");
    /**Getting second to last element by using let i = snakeBody.length -2
     */
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        /**Choosing the last element by adding i + 1 
         * by using  ... we are setting this as a brand new object so that
         * we do not have any reference problems and shifts the entire snake
         * so that everything moves forward position. Basically it moves to 
         * where its parents essentially is in the snake's body.
        */
      snakeBody[i + 1] = {...snakeBody[i]};  
    }
    /**Updating the snake head based on where we are moving */
   snakeBody[0].x += inputDirection.x;
   snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    //console.log("Draw Snake");
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);

    })
    
}

export function expandSnake(amount) {
    newSegments += amount;
    
}

export function onSnake(position, {ignoreHead = false} = {}) {
    /**Checking if the food is on our snake. */
    return snakeBody.some((segment, index)=> {
        if (ignoreHead && index === 0) {
            return false;
        };
        return equalPositions(segment, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true});
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    /**Expanding Snakes body 1 segment. Taking the last segment of the
     * snake's body and duplicating it. So, it will expand the snake's 
     * body by 1 segment. It will expand itself outwards.*/
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]}); 
    }
    /**After Expanding snakes value by 1 we are setting the newSegments
     * variable to 0 again to prevent the automatic continuous expansions 
     * of snake body by 1.*/
    newSegments = 0;
}