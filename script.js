var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.onload = function initialCSS() {
	color1.setAttribute("value", "#ff0000");
	color2.setAttribute("value", "#FFFF00");
	setGradient();
};

function getRanInt(max) {
	return Math.round(Math.random() * max);
}

function rgbToHex() {
	var rgb = getRanInt(255);
	var hex = rgb.toString(16);
	if (hex.length < 2) {
		hex = 0 + hex;
	}
	return hex;
}

function randomColorNo() {
	return no = "#" + rgbToHex() + rgbToHex() + rgbToHex();
}

function getRandomGradient() {
	color1.value = randomColorNo();
	color2.value = randomColorNo();
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", getRandomGradient);



