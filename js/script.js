
const playButton = $('#play-btn') 
const resetButton = $('#reset-btn')
let currentSnake = [10,11,12] // divs in the grid that is the snake (0 is tail, 2 is head)
let currentIndex = 0
let currentApple = 0
let xDirection = 1 // move one div to right or left
let yDirection = 10  // move 10 divs right or left (10x10 grid)
let intervalTime = 0
let interval = 0
let scoreboard = $(".scoreboard") 
let score = 0 
let speed = 0.8 



playButton.click(function(){
    createGrid()
    playGame()


    
})

resetButton.click(function(){
    resetGame()
})

// reset playboard
function resetGame(squares){
    let currentSnake = [0,1,2] 
    let currentIndex = 0
    let currentApple = 0
    let xDirection = 1 
    let yDirection = 10  
    let intervalTime = 0
    let interval = 0
    let score = 0
    squares.eq(currentIndex).removeClass('snake') // remove snake's head
    squareseq(currentApple).removeClass('apple') // remove apple

    // reseting snake
    for (i = 0; i < currentSnake.length; i++) {

        squares.eq(i).removeClass('snake')
    }

}



// function that automatically loads grid and snake 
function createGrid() {
// create grid
    for (let rows = 0; rows < 10; rows++){
    for (let columns = 0; columns < 10; columns++) {
            $("#grid-container").append("<div class='grid-items'></div>")   
    }} 

}


// function to start game
function playGame() {
    // add snake to first three divs of grid
    let squares = $(".grid-items")
    for (i = 0; i < currentSnake.length; i++) {
    squares.eq(i).addClass('snake')   
}

    // randomApple(squares) 
    direction =1 
    intervalTime=1000 
    currentSnake =[0,1,2] 
    currentIndex = 0 
    interval = setInterval(moveOutcomes,intervalTime) // repeat
    } 



 // function to move snake
     // to give illusion of snake moving, remove first div's class and add class to last div 
function moveSnake() {
    let squares = $(".grid-items")
    let tail = currentSnake.shift()
    console.log(tail)  // should remove first div as 'tail'
    squares.eq(tail).removeClass('snake') // div that contains tail, remove blue
    currentSnake.push(currentSnake.eq(2) + xDirection) // add class to new div that snake is moving to

}

function moveOutcomes (){ 
    let squares = $(".grid-items")
    // function to check if snake hit wall or itself
    
    function hit() {
        // if head..
        if(
            (currentSnake[2] + yDirection > 99) || // hit bottom (there are 99 boxes in grid)
            (currentSnake[2] - yDirection < 0 ) || // hit top
            (currentSnake[2] % yDirection === 9) || // hit right wall
            (currentSnake[2] % yDirection === 0) // hit left wall

    


        ) {alert("You hit a wall!")}
        // if next square contains snake
        else if (){}
    }
    // function to check if it ate apple, if yes then grow

    } 


function apple() {

}






// function to listen to key codes
document.addEventListener('keydown', function (event) {
    let squares = $(".grid-items")
    squares.eq(currentIndex).removeClass('snake')
        if (event.code === 'ArrowLeft') {
            xDirection = -1  // move one div back to go left
        }
        else if (event.code === 'ArrowRight') {
            xDirection = 1 // move one div front to go right
        }
        else if (event.code === 'ArrowUp') {
            yDirection = -10  // move 10 divs backwards to go up
        }
        else if (event.code === 'ArrowDown') {
            yDirection = 10 // move 10 divs forwards to go down

    }})






// Keydown eventlisteners 

// document.addEventListener('keydown', function (event) {

// let currentKey = event.code
// let currentDirection = 
// setInterval(move, 1)



  


//     function move() {
//     let currentDirection = null
//     if (event.code === 'ArrowUp') {
       
//        // continue moving upwards when key is pressed down
//         square.animate({ top: "-=50"})
//         let currentDirection = "up"
//         changeDirection()
        
    
//     }
//     if (event.code === 'ArrowDown') {
//         square.animate({ top: "+=50"})
//         let currentDirection = "down"
//         changeDirection()
//     }
//     if (event.code === 'ArrowRight') {
        
//         square.animate({ left: "+=50"})
//         let currentDirection = "right"
//         changeDirection()
//     }
//     if (event.code === 'ArrowLeft') {
//         square.animate({ right: "-=50"})
//         let currentDirection = "left"
//         changeDirection()
//     }

//     function changeDirection() {
        

        
//     }
// } 
//  })






// document.addEventListener('keyup',function(event) {
//     snake.queue("fx", [])
//     snake.stop(); 
// })





// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }
