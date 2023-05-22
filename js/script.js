
const playButton = $('#play-btn') 
const resetButton = $('#reset-btn')
let currentSnake = [0,1,2] // divs in the grid that is the snake (0 is tail, 2 is head)
let currentIndex = 0
let currentAppleIndex = 0
let direction = 1 // move one div to right or left
let rowJump = 10  // move 10 divs right or left (10x10 grid)
let intervalTime = 0
let interval = 0
let scoreboard = $(".scoreboard") 
let scoreTag = $("#score")
let highscoreTag = $("#highscore")
score = 0 
let snakeHead = currentSnake.length - 1
highscore = score



playButton.click(function(){
    resetGame()
    createGrid()
    playGame()
})

resetButton.click(function(){
    resetGame()
})

// reset playboard
function resetGame(){
    let squares = $(".grid-items")
    stopGame()
    $('#grid-container').empty()  //remove grid 
    currentIndex = 0
    direction = 1 
     rowJump = 10  
     intervalTime = 0
     interval = 0
     score = 0
    squares.eq(currentAppleIndex).removeClass('apple') // remove apple
}

function stopGame() {
    clearInterval(interval)
    
}



// function that loads grid and snake 
function createGrid() {
// create grid
    for (let rows = 0; rows < 10; rows++){
    for (let columns = 0; columns < 10; columns++) {
            $("#grid-container").append("<div class='grid-items'></div>")   
    }} 
}


// function to start game
function playGame() {
    scoreTag.text("Score is: " + score)  
    let currentSnake = [0,1,2]
    let squares = $(".grid-items")
       // add snake to first three divs of grid
    for (i = 0; i < currentSnake.length; i++) {
    squares.eq(currentSnake[i]).addClass('snake')   
}
    randomAppleGenerator() 
    direction = 1 
    intervalTime= 800
    currentIndex = 0 
    interval = setInterval(outcomes,intervalTime) // call outcomes every 1 second (after every move)
    


function moveSnake() {
    
    snakeHead = currentSnake.length - 1

    let squares = $(".grid-items")
    let tail = currentSnake.shift() // should remove first div as 'tail'
    squares.eq(tail).removeClass('snake') // div that contains tail, remove blue
    currentSnake.push(currentSnake[currentSnake.length - 1] + direction)     // adds new position to end of array 
    squares.eq(currentSnake[snakeHead]).addClass('snake') // add snake class to new div

    for (i = 0; i < currentSnake.length; i++) {
        squares.eq(currentSnake[i]).addClass('snake')   
    }
}


function outcomes (){ 
   
    let squares = $(".grid-items")

    for (i = 0; i < currentSnake.length; i++) {
        squares.eq(currentSnake[i]).addClass('snake')   
    }
    snakeHead = currentSnake.length - 1

        if(

            (currentSnake[snakeHead] + rowJump > 99 && direction === 10) || // hit bottom (there are 99 boxes in grid)
            (currentSnake[snakeHead] - rowJump < 0 && direction === -10) || // hit top
            (currentSnake[snakeHead] % rowJump === 9 && direction === 1) || //  heading towards right wall and still heading right
            (currentSnake[snakeHead] % rowJump === 0 && direction === -1) //  heading towards left wall and still heading left

        ) {
            alert("You hit a wall!")
            stopGame()
        }

        // if next square contains snake
        else if (squares.eq(currentSnake[snakeHead] + direction ).hasClass('snake')  === true )
        
        {  
            
        alert("You hit yourself!")
            
        stopGame()
    }
    
    // check if it ate apple, if yes then grow
    // if square containing snake's head is the same as square containing apple
    
    else if (squares.eq(currentSnake[snakeHead]).hasClass('apple')) {
        squares.eq(currentAppleIndex).removeClass('apple')
        score = score + 1
        scoreTag.text("Score is: " + score) 
        if (score > highscore) {
            highscore = score
            highscoreTag.text("Highscore is: " + highscore)
        } 
        
        clearInterval(interval)
        intervalTime = intervalTime * 0.9
        interval = setInterval(outcomes,intervalTime)
        randomAppleGenerator() 
        currentSnake.unshift(currentSnake[0] - 1)  // grow tail (add to beginning of array)

        

    } else {moveSnake()}

    } 

function randomAppleGenerator() {
    let squares = $(".grid-items")

    /// do while executes code block first THEN checks condition
    do {
    currentAppleIndex = Math.floor(Math.random()*100)   //math.floor because it rounds down and value will never be a 100

 
  
}
    while (squares.eq(currentAppleIndex).hasClass('snake') === true)
    squares.eq(currentAppleIndex).addClass('apple')
}



}



// function to listen to key codes
document.addEventListener('keydown', function (event) {
    let squares = $(".grid-items")
    squares.eq(currentIndex).removeClass('snake')
        if (event.code === 'ArrowLeft') {
            direction = -1  // move one div back to go left
        }
        else if (event.code === 'ArrowRight') {
            direction = 1 // move one div front to go right
        }
        else if (event.code === 'ArrowUp') {
            direction = -10  // move 10 divs backwards to go up
        }
        else if (event.code === 'ArrowDown') {
            direction = 10 // move 10 divs forwards to go down

    }})




