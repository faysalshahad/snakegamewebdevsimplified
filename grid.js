
const gridSize = 21;

export function randomGridPosition() {
    return{
        x: (Math.floor(Math.random() * gridSize) + 1),
        y: (Math.floor(Math.random() * gridSize) + 1)
    }
};

export function outSideGrid(position) {
    /**Checking if the position of the snake is outside the grid boundary
     * or not. If snak hits the boundary wall then this function will
     * return the position.*/
    return(
        position.x < 1 || position.x > gridSize || 
        position.y < 1 || position.y > gridSize
    )
};