let box = document.getElementById("box");
let direction = 1;




box.style.left = "0px";
box.style.top = "0px";



function startBox() {
    let pLeft = parseInt(box.style.left);
    let pTop = parseInt(box.style.top);



    box.style.left = (pLeft + 62 * direction) + "px";



    const rightArrow = document.createElement("div");
    rightArrow.innerHTML = "&rarr;";
    rightArrow.style.position = "absolute";
    rightArrow.style.left = "50px";
    rightArrow.style.top = "25px";
    body.appendChild(rightArrow);


    rightArrow.style.top = (pTop + 20 * direction) + "px";
    rightArrow.style.left = (pLeft + 120 * direction) + "px"

    // console.log(pTop);
    // let rLeft = rightArrow.style.left;
    // let rTop = rightArrow.style.top;
    // console.log(rLeft)

    // console.log(rTop)


    setTimeout(() => {
        box.style.top = (pTop + 34 * direction) + "px";
        const downArrow = document.createElement("div");
        downArrow.innerHTML = "&darr;";
        downArrow.style.position = "absolute";
        downArrow.style.left = "10px";
        downArrow.style.top = "60px";
        body.appendChild(downArrow);


        downArrow.style.top = (pTop + 90 * direction) + "px";
        downArrow.style.left = (pLeft + 85 * direction) + "px";
        if (direction === 1) {
            downArrow.style.transform = 'rotate(0deg)';

        }
        else {
            downArrow.style.transform = 'rotate(-180deg)';

        }
    }, 500)


    // 145
    // 197

    if (pLeft >= window.innerWidth - 145 && pTop >= window.innerHeight - 197) {
        direction = -1;


    } else if (pLeft <= 0 && pTop <= 0) {
        direction = 1;
    }

    if (direction === 1) {
        rightArrow.style.transform = 'rotate(0deg)';


    }
    else {
        rightArrow.style.transform = 'rotate(-180deg)';
    }



}


setInterval(startBox, 1000);

