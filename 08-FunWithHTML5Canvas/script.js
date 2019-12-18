//get the canvas and tranform in 2d
const canvas = document.querySelector('#draw');
const panel = canvas.getContext('2d');

//height of total page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//variables of drawing
panel.strokeStyle = '#ffffff';
panel.lineJoin = 'round';
panel.lineCap = 'round';
panel.lineWidth = 100; //thickness of paint
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let colorHsl = 0; // color
let direction = true;

function draw(e) {
  // stop the fn from running when they are not moused down
  if (!isDrawing) return; 

  //change the color
  panel.strokeStyle = `hsl(${colorHsl}, 100%, 50%)`;

  //drawing
  panel.beginPath();
  panel.moveTo(lastX, lastY);// start from
  panel.lineTo(e.offsetX, e.offsetY); // go to
  panel.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //increase color with each event
  colorHsl++;
  if (colorHsl >= 360) {
    colorHsl = 0;
  }
  if (panel.lineWidth >= 100 || panel.lineWidth <= 1) {
    direction = !direction;
  }

  //line of paint
  if(direction) {
    panel.lineWidth++;
  } else {
    panel.lineWidth--;
  }

}

//event click
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

//mouse events
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);