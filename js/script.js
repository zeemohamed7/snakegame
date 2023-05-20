
const playButton = $('#play-btn')
// const currentSnake = ['head','body','tail']
const currentSnake = [0,1,2]

xDirection = 1
yDirection = 0

playButton.click(function(){
    console.log("button works")
    createGrid()
})

function startGame(){
    createGrid()

}



// function that automatically loads grid and snake when play button is clicked
function createGrid() {
    console.log('grid printed')
    for (let rows = 0; rows < 10; rows++){
    for (let columns = 0; columns < 10; columns++) {
            $("#grid-container").append("<div class='grid-items'></div>")   
    }
    let squares = $(".grid-items")

// adding 'snake' class to first three divs in grid
    for (i = 0; i < 3; i++) {
        squares.eq(i).addClass('snake')

        
}

// snake is an array so that we can add and remove its tail and head


}
}


function moveSnake() {
    // to give illusion of snake moving, remove last div's class and add class to div to the first
    // remove tail's div class
    let tail = currentSnake.pop()  // should remove and return 'tail'


    squares[tail].removeClass('snake') // div that contains tail, remove blue
    currentSnake.unshift(currentSnake[0] + direction)

}


document.addEventListener('keydown', function (event) {
    if ( yDirection === 1 || yDirection === -1) {
        if (event.code === 'ArrowLeft') {
            xDirection = -1
            yDirection = 0

        }
        else if (event.code === 'ArrowRight') {
            xDirection = 1
            yDirection = 0
            
        }}

    if ( xDirection === 1 || xDirection === -1 ) {
        if (event.code === 'ArrowUp') {
            xDirection = 0
            yDirection = 1

        }
        else if (event.code === 'ArrowDown') {
            xDirection = 0
            yDirection = -1
            
        }

    }

       


    }


)




























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
