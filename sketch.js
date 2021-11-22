const canvas = document.querySelector(".canvas");
const eraser = document.querySelector(".eraser");
const draw = document.querySelector(".draw");
const gridder = document.querySelector(".gridLines");
const clear = document.querySelector(".clear");
const coloring = document.querySelector(".colorPicker");
let currentColor = '#000000';
let color = 1;
let gridToggle = 1;
let realColor;

let i = 0;
for (i; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let grid = document.createElement("div");
        grid.className = "gridSquare";
        canvas.appendChild(grid);
    }
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

//goes through the function whenever there is a change in [coloring]
coloring.onchange = (e) => setCurrentColor(e.target.value);

function colorWhite(div) {
    div.classList.remove("blacked");
}

eraser.addEventListener('click', () => {
    color = 0;
});

draw.addEventListener('click', () => {
    color = 1;
});

let divs = document.querySelectorAll(".gridSquare");

gridder.addEventListener('click', () => {
    console.log(divs.length);
    if (gridToggle == 1) {
        let len = divs.length;
        for (let i = 0; i < len; i++) {
            divs[i].classList.add("removed");
        }
        gridToggle = 0;
    }
    else {
        let len = divs.length;
        for (let i = 0; i < len; i++) {
            divs[i].classList.remove("removed");
        }
        gridToggle = 1;
    }
});

clear.addEventListener('click', () => {
    let len = divs.length;
    for (let i = 0; i < len; i++) {
        divs[i].style.backgroundColor = '#FFFFFF';
    }
})

function changeColor(e) {
    if (color == 1) {
        e.target.style.backgroundColor = currentColor;
    }
    else if (color == 0)
        e.target.style.backgroundColor = '#FFFFFF';
}

divs.forEach(div => div.addEventListener('mouseover', changeColor));