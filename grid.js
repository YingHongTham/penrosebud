//range slider to control pentagrid
//https://www.w3schools.com/howto/howto_js_rangeslider.asp 
var slider = document.getElementById('gamma_1');
var output = document.getElementById('testdiv');
output.innerHTML = slider.value;

slider.oninput = updateGrid;

//on drawing lines:
//https://www.javascripttutorial.net/web-apis/javascript-draw-line/

function updateGrid() {
	const canvas = document.getElementById('canvas-pentagrid');
	if (!canvas.getContext) {
		return;
	}

	const ctx = canvas.getContext('2d');
	//clear canvas before drawing again
	ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.strokeStyle = 'red';
	ctx.lineWidth = 5;

	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(100+parseInt(slider.value),200);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(100+parseInt(slider.value),200);
	ctx.stroke();
};
updateGrid();
