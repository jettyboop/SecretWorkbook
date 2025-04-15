var capture;
//var diceRoll;

function setup() {
createCanvas(windowWidth, windowHeight);
capture= createCapture(VIDEO);
capture.hide();

imageMode(CENTER);
}

function draw() {
  push ();
  //filter(THRESHOLD, 0.01);
  filter(THRESHOLD);
  image(capture, mouseX, mouseY, 200, 200);
  pop();
  
  //background(0, 0, 255);
  //textSize(72)
  //text(diceRoll, width/2, height/2);
}

//function mousePressed() {
  //diceRoll= random(10);}
