
const playButton = $('#play-btn') 
const resetButton = $('#reset-btn')
let currentSnake = [0,1,2] // divs in the grid that is the snake (0 is tail, 2 is head)
let currentIndex = 0
let currentAppleIndex = 0
let xDirection = 1 // move one div to right or left
let yDirection = 10  // move 10 divs right or left (10x10 grid)
let intervalTime = 0
let interval = 0
let scoreboard = $(".scoreboard") 
let score = 0 
let snakeHead = currentSnake.length - 1


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
    let currentAppleIndex = 0
    let xDirection = 1 
    let yDirection = 10  
    let intervalTime = 0
    let interval = 0
    let score = 0
    squares.eq(currentAppleIndex).removeClass('apple') // remove apple

    // reseting snake
    for (i = 0; i < currentSnake.length; i++) {

        squares.eq(currentSnake[i]).removeClass('snake')
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
    console.log(currentSnake)
    let squares = $(".grid-items")
       // add snake to first three divs of grid
    for (i = 0; i < currentSnake.length; i++) {
    squares.eq(currentSnake[i]).addClass('snake')   
}
    randomAppleGenerator() 

    xDirection = 1 
    intervalTime=1000 
    currentIndex = 0 
    interval = setInterval(outcomes,intervalTime) // call outcomes every 1 second (after every move)
    

}

 // function to move snake
     // to give illusion of snake moving, remove first div's class and add class to last div 
function moveSnake() {
    let squares = $(".grid-items")
    let tail = currentSnake.shift() // should remove first div as 'tail'
    squares.eq(tail).removeClass('snake') // div that contains tail, remove blue
    
    currentSnake.push(currentSnake[currentSnake.length - 1]+xDirection)     // adds new position to array 
    squares.eq(currentSnake[snakeHead]).addClass('snake') // add snake class to new div

}

function outcomes (){ 
    let squares = $(".grid-items")
    // function to check if snake hit wall or itself

    function hit() {
        // if head..
        if(
            (currentSnake[snakeHead] + yDirection > 99) || // hit bottom (there are 99 boxes in grid)
            (currentSnake[snakeHead] - yDirection < 0 ) || // hit top
            (currentSnake[snakeHead] % yDirection === 9 && xDirection === 1) || //  heading towards right wall and still heading right
            (currentSnake[snakeHead] % yDirection === 0 && xDirection === -1) //  heading towards left wall and still heading left

    


        ) {alert("You hit a wall!")}
        // if next square contains snake
        else if (squares.eq(currentSnake[2] + xDirection).hasClass('snake')  === true )
        {alert("You hit yourself!")}
    }
    // function to check if it ate apple, if yes then grow
    // if square containing snake's head is the same as square containing apple
    
    if (squares.eq(currentSnake[snakeHead]) === squares.eq(currentAppleIndex)) {
        console.log(squares[currentSnake])
        score = score + 1
        squares.eq(tail).addClass("snake") 
        currentSnake.unshift(tail)  // grow tail
        randomAppleGenerator(squares) 
        interval = setInterval(outcomes,intervalTime)

    } else {moveSnake()}

    } 



function randomAppleGenerator() {
    let squares = $(".grid-items")

    /// do while executes code block first THEN checks condition
    do {
    currentAppleIndex = Math.round(Math.random()*100)
    console.log(currentAppleIndex)
  
}
    while (squares.eq(currentAppleIndex).hasClass('snake') === true)
    squares.eq(currentAppleIndex).addClass('apple')
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
