
import { onSnake, expandSnake } from "./snake.js";

import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();

const expansionRate = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
        
    }
    
}

export function draw(gameBoard) {  
        const foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    /**Creating Food position randomly on the grid as long as the new food 
     * position is empty and also the food will be never be on the snake.*/
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
       newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}