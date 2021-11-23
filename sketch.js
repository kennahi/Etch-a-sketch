const canvas = document.querySelector(".canvas");
const eraser = document.querySelector(".eraser");
const draw = document.querySelector(".draw");
const gridder = document.querySelector(".gridLines");
const clear = document.querySelector(".clear");
const coloring = document.querySelector(".colorPicker");
const slider = document.querySelector(".slider");
const gridValeur = document.querySelector(".gridValue");
const Rainbow = document.querySelector(".rainbow");
/*-----------*/
let currentColor = '#000000';
let currentSize = 16;
let color = 1;
let gridToggle = 1;
let realColor;
let gridValue;
let access = 0;
let diva;
let grid;
let divs;
/*-----------*/

setupGrid();
draw.classList.add('blacked');
draw.classList.remove('hover');

/* ----------functions ----------*/

function changeColor(e) {
    if (color == 1) {
        e.target.style.backgroundColor = currentColor;
    }
    else if (color == 0)
        e.target.style.backgroundColor = '#FFFFFF';
    else if (color == 2)
        e.target.style.backgroundColor = randomColor(currentColor);
    else if (color == 3)
        e.target.style.backgroundColor = currentColor + '10%';
}

function randomColor(Colorbow) {
    Colorbow = Math.floor(Math.random() * 16777215).toString(16);
    Colorbow = '#' + Colorbow;
    console.log(Colorbow);
    return (Colorbow);
}

function cleared() {
    clear.classList.add('blacked');
    clear.classList.remove('hover');
    draw.classList.remove('blacked');
    gridder.classList.remove('blacked');
    eraser.classList.remove('blacked');
    Rainbow.classList.remove('blacked');
    draw.classList.add('hover');
    eraser.classList.add('hover');
    gridder.classList.add('hover');
    Rainbow.classList.add('hover');

    let len = diva.length;
    for (let i = 0; i < len; i++) {
        diva[i].style.backgroundColor = '#FFFFFF';
    }
    color = 3;
}

function erased() {
    color = 0;
    divs = document.querySelectorAll('.gridSquare');
    divs.forEach(div => div.addEventListener('mouseover', changeColor));

    eraser.classList.add('blacked');
    eraser.classList.remove('hover');
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    gridder.classList.remove('blacked');
    Rainbow.classList.remove('blacked');
    draw.classList.add('hover');
    clear.classList.add('hover');
    gridder.classList.add('hover');
    Rainbow.classList.add('hover');
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentSize(newSize) {
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    gridder.classList.remove('blacked');
    eraser.classList.remove('blacked');
    Rainbow.classList.remove('blacked');
    draw.classList.add('hover');
    clear.classList.add('hover');
    gridder.classList.add('hover');
    eraser.classList.add('hover');
    Rainbow.classList.add('hover');

    currentSize = newSize;
    access = 1;
    console.log("test" + currentSize);
    let len = diva.length;
    for (let i = 0; i < len; i++) {
        diva[i].style.backgroundColor = '#FFFFFF';
    }

    setupGrid();

    len = diva.length;
    for (i = 0; i < len; i++) {
        diva[i].style.width = "calc(800px/" + currentSize + ")";
        diva[i].style.height = "calc(800px/" + currentSize + ")";
    }
    divs = document.querySelectorAll('.gridSquare');
}

function setupGrid() {
    if (access == 1) {
        document.querySelectorAll('.gridSquare').forEach(e => e.remove());
        access = 0;
    }

    for (let d = 0; d < currentSize; d++) {
        for (let j = 0; j < currentSize; j++) {
            grid = document.createElement("div");
            grid.className = "gridSquare";
            canvas.appendChild(grid);
        }
    }
    diva = document.querySelectorAll(".gridSquare");
}

/*---------------------events--------------*/

Rainbow.addEventListener('click', () => {
    color = 2;
    divs = document.querySelectorAll('.gridSquare');
    divs.forEach(div => div.addEventListener('mouseover', changeColor));

    Rainbow.classList.add('blacked');
    Rainbow.classList.remove('hover');
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    gridder.classList.remove('blacked');
    eraser.classList.remove('blacked');
    draw.classList.add('hover');
    clear.classList.add('hover');
    gridder.classList.add('hover');
    eraser.classList.add('hover');
})

eraser.addEventListener('click', () => {
    erased();
});

draw.addEventListener('click', () => {
    color = 1;
    draw.classList.add('blacked');
    draw.classList.remove('hover');
    gridder.classList.remove('blacked');
    clear.classList.remove('blacked');
    eraser.classList.remove('blacked');
    Rainbow.classList.remove('blacked');
    Rainbow.classList.add('hover');
    clear.classList.add('hover');
    gridder.classList.add('hover');
    eraser.classList.add('hover');

    divs = document.querySelectorAll('.gridSquare');
    divs.forEach(div => div.addEventListener('mouseover', changeColor));
});

gridder.addEventListener('click', () => {
    gridder.classList.remove('hover');
    draw.classList.remove('blacked');
    clear.classList.remove('blacked');
    eraser.classList.remove('blacked');
    Rainbow.classList.remove('blacked');
    draw.classList.add('hover');
    clear.classList.add('hover');
    Rainbow.classList.add('hover');
    eraser.classList.add('hover');

    divs = document.querySelectorAll('.gridSquare');
    divs.forEach(div => div.addEventListener('mouseover', changeColor));

    if (gridToggle == 1) {
        let len = diva.length;
        for (let i = 0; i < len; i++) {
            diva[i].classList.add("removed");
        }
        gridToggle = 0;
    }
    else {
        let len = diva.length;
        for (let i = 0; i < len; i++) {
            diva[i].classList.remove("removed");
        }
        gridToggle = 1;
    }
    gridder.classList.add('blacked');
});

//changes while the mouse moves
slider.onmousemove = (e) => {
    gridValue = e.target.value;
    gridValeur.textContent = gridValue + "x" + gridValue;
}

//goes through the function whenever there is a change in [coloring]
coloring.onchange = (e) => setCurrentColor(e.target.value);

slider.onchange = (e) => setCurrentSize(e.target.value);

clear.addEventListener('click', () => {
    cleared();
});

divs = document.querySelectorAll('.gridSquare');
divs.forEach(div => div.addEventListener('mouseover', changeColor));





