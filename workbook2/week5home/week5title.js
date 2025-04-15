let points = [];

function preload() {
  font = loadFont('./data/InterTight-VariableFont_wght.ttf');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 points = font.textToPoints("week5", 
 width / 2-250 , //x position
 height / 2, //y position
 150, { //fontsize
   sampleFactor: 0.2, //level of detail
 });
}

function draw() {
  background(255);
  xMapped = map(mouseX, 0, width, 10, 150);
  xMappedSize = map(mouseX, 0, width, 4, 32);
  for (let p of points) {
    fill(0, 0, 255);
    noStroke();
  ellipse(p.x + random(-1, 1), p.y + random(-1, 1), xMappedSize, xMappedSize);

  }
}