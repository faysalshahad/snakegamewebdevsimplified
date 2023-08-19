let inputDirection = { x: 0, y: 0};

let lastInputDirection = { x: 0, y: 0};

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            /**Preventing user from going down or further up when they have 
             * already pressed Up key. They can move only right or left when 
             * the Up key has been pressed and snake is moving upwards.*/
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = {x:0 , y:-1};            
            break;

            case "ArrowDown":
                /**Preventing user from going further down or up when they 
                 * have already pressed Down key. They can move only right 
                 * or left when the Down key has been pressed and snake is 
                 * moving downwards.*/
                if (lastInputDirection.y !== 0) {
                    break;
                }
            inputDirection = {x:0 , y:1};            
            break;

            case "ArrowLeft":
                /**Preventing user from going further left or right when they 
                 * have already pressed Left key. They can move only Up or 
                 * down when the Left key has been pressed and snake is moving 
                 * towards left.*/
                if (lastInputDirection.x !== 0) {
                    break;
                }
            inputDirection = {x:-1 , y:0};            
            break;

            case "ArrowRight":
                /**Preventing user from going left or further right when they 
                 * have already pressed Right key. They can move only Up or 
                 * down when the Right key has been pressed and snake is moving 
                 * towards Right.*/
                if (lastInputDirection.x !== 0) {
                    break;
                }
            inputDirection = {x:1 , y:0};            
            break;
    
        default:
            break;
    }
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}