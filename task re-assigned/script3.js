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

    setTimeout(() => {
        rightArrow.remove()
    }, 5000)


    rightArrow.style.top = (pTop + 21 * direction) + "px";
    rightArrow.style.left = (pLeft + 79 * direction) + "px"



    setTimeout(() => {
        box.style.top = (pTop + 34 * direction) + "px";
        const downArrow = document.createElement("div");
        downArrow.innerHTML = "&darr;";
        downArrow.style.position = "absolute";
        downArrow.style.left = "10px";
        downArrow.style.top = "60px";
        body.appendChild(downArrow);

        setTimeout(() => {
            downArrow.remove()
        }, 5000)


        downArrow.style.top = (pTop + 40 * direction) + "px";
        downArrow.style.left = (pLeft + 85 * direction) + "px";
        if (direction === 1) {
            downArrow.style.transform = 'rotate(0deg)';

        }
        else {
            const upArrow = document.createElement("div");
            upArrow.innerHTML = "&uarr;";
            upArrow.style.position = "absolute";
            upArrow.style.left = "25px";
            upArrow.style.top = "-25px";
            upArrow.style.color = 'blue'
            body.appendChild(upArrow);
            setTimeout(() => {
                upArrow.remove()
            }, 5000)

            upArrow.style.top = (pTop + 30 * direction) + "px";
            upArrow.style.left = (pLeft + 44 * direction) + "px"
            downArrow.style.visibility = 'hidden';

        }
    }, 450)


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
        const leftArrow = document.createElement("div");
        leftArrow.innerHTML = "&larr;";
        leftArrow.style.position = "absolute";
        leftArrow.style.left = "-25px";
        leftArrow.style.top = "25px";
        leftArrow.style.color = 'red'
        body.appendChild(leftArrow);

        setTimeout(() => {
            leftArrow.remove()
        }, 5000)

        leftArrow.style.top = (pTop + 1 * direction) + "px";
        leftArrow.style.left = (pLeft + 38 * direction) + "px";
        rightArrow.style.visibility = 'hidden'
    }
    console.log(pLeft, pTop);


}


setInterval(startBox, 900);

