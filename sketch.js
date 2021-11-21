const canvas = document.querySelector(".canvas");


let i = 0;
for (i; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		// console.log(j);
		let grid = document.createElement("div");
		grid.className = "gridSquare";
		canvas.appendChild(grid);
	}
}

function colorBlack(e) {
	this.classList.add("blacked");
}

let divs = document.querySelectorAll(".gridSquare");

divs.forEach(div => div.addEventListener('mouseover', colorBlack));
// let greed = document.querySelector(".gridSquare");
// greed.addEventListener("mouseover", function(e) {
// console.log(e);
// })