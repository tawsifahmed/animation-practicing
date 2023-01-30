// set the initial position of the box
let x = 0;
let y = 0;
let a = 0;
let b = 0;
let direction = 'down';

var canvasWidth = 500;
var canvasHeight = 500;



let dir = 1


// create a box element
let box = document.createElement('div');
box.style.width = '50px';
box.style.height = '50px';
box.style.border = '3px solid red'
box.style.background = 'green';
box.style.position = 'absolute';
document.body.appendChild(box);

// move the box in a loop
setInterval(() => {

    if (direction === 'down') {



        // arrow.style.top = '500px';

        // let arrow = document.createElement('div')
        // arrow.style.width = '100px'
        // arrow.style.height = '10px';

        // arrow.style.border = '2px solid black'




        // document.body.appendChild(arrow);

        x += 80 * dir;
        const rightArrow = document.createElement("div");
        rightArrow.innerHTML = "&rarr;";
        rightArrow.style.position = "absolute";
        rightArrow.style.left = "50px";
        rightArrow.style.top = "25px";
        document.body.appendChild(rightArrow);
        rightArrow.style.left = y + "px";
        rightArrow.style.top = x + "px"


    } else {

        // b += 100;
        // a += 100;
        y += 40 * dir;
    }

    // check if the box has reached the end of the display
    if (direction === 'right') {
        direction = 'down';


    } else if (direction === 'down') {
        direction = 'right';

    }




    // arrow.style.top = x + '500px';
    // arrow.style.left = y + '100px';

    if (x >= window.innerWidth - 150 && y >= window.innerHeight - 197) {
        // Change the direction of the line
        dir = -1
    }

    // Check if the line has hit the left or top edge
    if (x <= 0 && y <= 0) {
        // Change the direction of the line
        dir = 1
    }

    box.style.left = (x * dir) + 'px';
    box.style.top = (y * dir) + 'px';
    // if (x >= window.innerWidth - 150 && y >= window.innerHeight - 197) {
    //     dir = -1;


    // } else if (x <= 0 && y <= 0) {
    //     dir = 1;
    // }

    // update the position of the box on the screen




}, 100);
