const snake = $('#snake')
const interval = 10;  // how much the position should move

const square = $('#square')



// Keydown eventlisteners 

document.addEventListener('keydown', function(event) {
    // console.log(event)
    if (event.code === 'ArrowUp') {
        console.log('Arrow up pressed')
        
    }

    if (event.code === 'ArrowDown') {
        console.log('Arrow down pressed')
        square.css('top') =  parseInt(square.css('top')) - interval + 'px'

    }

    if (event.code === 'ArrowRight') {
        console.log('Arrow right pressed')
    }

    if (event.code === 'ArrowLeft') {
        console.log('Arrow left pressed')
    }
} )





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
