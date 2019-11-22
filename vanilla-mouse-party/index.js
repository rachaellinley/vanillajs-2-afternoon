

// window.addEventListener('mousemove', function (mouseMoveEvent){
//     //target.addEventListener(type, listener[, options]);
//     //waiting for mousemove
//     //passing in a function to be performed when the mouse moves
//     //function will get passed in an argument which is an event (mousemove event)
//     //two properties in the mousemoveevent are position x and position y 
//     mousePosition.x = mouseMoveEvent.pageX;
//     mousePosition.y = mouseMoveEvent.pageY;
// });
//

// keep track of mouse position by creating variables
const mousePosition = { x: 0, y: 0 };

//getRandomNumber takes in a min and max number and 
//returns a number in between to randomize the color, 
//position, and size of dots 
//use a variable to keep track of 
// when the dots should be on or off the screen
const getRandomNumber = function(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

//create an eventlistener for anytime the mouse moves 
//invoke it and pass in a string stating what even we are waiting for, "mousemove"
//pass in a function-- what is to be performed when the mouse moves
//make a name function and pass it in 
window.addEventListener('mousemove', function(e) {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

function draw() {
   //determines how quickly the dots are added to our page
  return setInterval(function() {
    const container = document.getElementById('wrap');
    //wrap is a div. all the dots live in that container
    //
    const color = `background:rgb(${getRandomNumber(0, 255)},${getRandomNumber(

    //interpolation  `${}
      0,
      255

    )}, ${getRandomNumber(0, 255)});`;

    //creating random ball size and color 
    const ballSize = getRandomNumber(10, 30);
    const size = `height:${ballSize}px; width:${ballSize}px;`;
    const left = `left:${getRandomNumber(
      //left relative to where the mouse is
      mousePosition.x - ballSize,
      mousePosition.x
    )}px;`;
    const top = `top:${getRandomNumber(
      //top is relative to the mouse 
      mousePosition.y - ballSize,
      mousePosition.y
    )}px;`;
    const style = `${left}${top}${color}${size}`;
    //putting all those together 

    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style = style;

    ball.addEventListener('animationend', function(e) {
      e.target.remove();
    });

    container.appendChild(ball);
  }, 50);
}
window.addEventListener('mouseover', function() {
  drawId = draw();
});
window.addEventListener('mouseout', function() {
  clearInterval(drawId);
});