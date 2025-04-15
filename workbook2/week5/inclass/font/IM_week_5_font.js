let points = [];

function preload() {
  font = loadFont('./data/Poppins-Black.ttf');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(180);
 points = font.textToPoints("Les Points", 
 width / 2 - 450, //x position
 height / 2, //y position
 150, { //fontsize
   sampleFactor: 0.2, //level of detail
 });
}

function draw() {
  background(160);
  xMapped = map(mouseX, 0, width, 10, 150);
  xMappedSize = map(mouseX, 0, width, 4, 32);
  for (let p of points) {
    fill(0, 0, xMapped, 20);
    noStroke();
    ellipse(p.x, p.y, xMappedSize, xMappedSize);
  }
}
