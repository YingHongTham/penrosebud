//range slider to control pentagrid
//https://www.w3schools.com/howto/howto_js_rangeslider.asp 

//on drawing lines:
//https://www.javascripttutorial.net/web-apis/javascript-draw-line/


const canvas = document.getElementById('canvas-pentagrid');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 2;

const midx = canvas.width / 2.0;
const midy = canvas.height / 2.0;


//list of slider html elements
const slider = [];
for (var i = 0; i < 5; i++) {
	slider.push(document.getElementById('gamma_' + i));
}

slider[0].oninput = updateGrid;
slider[1].oninput = updateGrid;


//grid line colors
const gridline_colors = [];
gridline_colors.push('red');
gridline_colors.push('yellow');
gridline_colors.push('green');
gridline_colors.push('blue');
gridline_colors.push('purple');


const cos36 = Math.cos(Math.PI * 36 / 180);
const sin36 = Math.sin(Math.PI * 36 / 180);


//coordinates for endpoints of one line
//for i=0,2,3, this line, when translated horizontal to the right,
//should display properly (i.e. go from boundary to boundary
//in the canvas, not stopping midway)
//for i=1,4, same but when translated vertically
//these lines should all intersect in the middle of the canvas
//when the sliders are 0
const baseline = [];
baseline.push({
	x1 : midx,
	y1 : 0,
	x2 : midx,
	y2 : canvas.height
});
baseline.push({
	x1 : 0,
	y1 : midy - midx * sin36,
	x2 : canvas.width,
	y2 : midy + midx * sin36
});



function updateGrid() {
	//clear canvas before drawing again
	ctx.clearRect(0,0,canvas.width,canvas.height);


	ga0 = parseInt(slider[0].value);
	ga1 = parseInt(slider[1].value);

	ctx.strokeStyle = gridline_colors[0];
	for (var i = -5; i < 5; i++) {
		ctx.beginPath();
		ctx.moveTo(baseline[0].x1 + i * 50 + ga0, baseline[0].y1);
		ctx.lineTo(baseline[0].x2 + i * 50 + ga0, baseline[0].y2);
		ctx.stroke();
	}

	ctx.strokeStyle = gridline_colors[1];
	for (var i = -5; i < 5; i++) {
		ctx.beginPath();
		ctx.moveTo(baseline[1].x1, baseline[1].y1 + i * 50 + ga1);
		ctx.lineTo(baseline[1].x2, baseline[1].y2 + i * 50 + ga1);
		ctx.stroke();
	}

};
updateGrid();
