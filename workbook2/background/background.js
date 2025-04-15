function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  background('white');
  strokeWeight(90);
  stroke(0);
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'black';
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed(){
  background('white');
}
//week4 cheatsheet
