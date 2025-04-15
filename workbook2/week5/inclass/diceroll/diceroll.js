//var capture;
var diceRoll;

function setup() {
createCanvas(windowWidth, windowHeight);
background(0, 0, 255);
capture= createCapture(VIDEO);
capture.hide();
imageMode(CENTER);
textAlign(CENTER);
}

function draw() {
//circle(200, 200, 300);
//push ();
//filter(THRESHOLD, 0.01);
//filter(BLUR, 0.8);
//image(capture, mouseX, mouseY, 200, 200);
//pop();

  background(0, 0, 255);
  textSize(72)
  text(diceRoll, width/2, height/2);
}

function mousePressed() {
  diceRoll= random(10);
}
