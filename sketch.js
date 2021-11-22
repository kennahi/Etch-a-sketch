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
let firstButton = 1;
let secondButton = 0;

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

eraser.addEventListener('click', () => {
    color = 0;
    eraser.classList.add('blacked');
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    gridder.classList.remove('blacked');
});

draw.addEventListener('click', () => {
    color = 1;
    draw.classList.add('blacked');
    gridder.classList.remove('blacked');
    clear.classList.remove('blacked');
    eraser.classList.remove('blacked');
});

let divs = document.querySelectorAll(".gridSquare");

gridder.addEventListener('click', () => {
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    eraser.classList.remove('blacked');
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
    gridder.classList.add('blacked');
});

clear.addEventListener('click', () => {
    draw.classList.remove('blacked');
    gridder.classList.remove('blacked');
    eraser.classList.remove('blacked');
    let len = divs.length;
    for (let i = 0; i < len; i++) {
        divs[i].style.backgroundColor = '#FFFFFF';
    }
    clear.classList.add('blacked');
})

function changeColor(e) {
    if (color == 1) {
        e.target.style.backgroundColor = currentColor;
    }
    else if (color == 0)
        e.target.style.backgroundColor = '#FFFFFF';
}

divs.forEach(div => div.addEventListener('mouseover', changeColor));

draw.classList.add('blacked');