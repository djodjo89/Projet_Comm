var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var largeurPerso = 10;
var dx = 5;
var dy = 5;

var droitePressee = false;
var gauchePressee = false;
var hautPressee = false;
var basPressee = false;

document.addEventListener("keydown", toucheEnfoncee, false);
document.addEventListener("keyup", toucheRelachee, false);

function drawPerso() {
    ctx.beginPath();
    ctx.arc(x, y, largeurPerso, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (droitePressee && x + dx + largeurPerso < canvas.width) x += 5;
    if (gauchePressee && x - dx - largeurPerso >= 0) x -= 5;
    if (hautPressee && y - dy - largeurPerso >= 0) y -= 5;
    if (basPressee && y + dy + largeurPerso < canvas.height) y += 5;
    drawPerso();
}

function toucheEnfoncee(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		droitePressee = true;		
	}
	else if (e.key == "Left" || e.key == "ArrowLeft") {
		gauchePressee = true;
	}
	if (e.key == "Down" || e.key == "ArrowDown") {
		basPressee = true;		
	}
	else if (e.key == "Up" || e.key == "ArrowUp") {
		hautPressee = true;
	}
}

function toucheRelachee(e) {
	if (e.key == "Right" || e.key == "ArrowRight") {
		droitePressee = false;		
	}
	else if (e.key == "Left" || e.key == "ArrowLeft") {
		gauchePressee = false;
	}
	if (e.key == "Down" || e.key == "ArrowDown") {
		basPressee = false;		
	}
	else if (e.key == "Up" || e.key == "ArrowUp") {
		hautPressee = false;
	}
}

setInterval(draw, 10);