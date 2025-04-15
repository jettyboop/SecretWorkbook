let capture;
let points = [];
let font;

function preload() {
  font = loadFont('./data/InterTight-VariableFont_wght.ttf');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
canvas.style('display', 'block'); 
 

  capture = createCapture(VIDEO);
  capture.size(480, 480);
  capture.hide();

  points = font.textToPoints("week5",
    width / 2 - 250, // x position
    height / 2,      // y position
    150, {           // font size
      sampleFactor: 0.2,
    });
}

function draw() {

  image(capture, mouseX, mouseY, 200, 200);
  filter(THRESHOLD, 0.2);

  let xMappedSize = map(mouseX, 0, width, 4, 32);
  fill(0, 0, 255);
  noStroke();
  for (let p of points) {
    ellipse(p.x + random(-1, 1), p.y + random(-1, 1), xMappedSize, xMappedSize);
  }
}
