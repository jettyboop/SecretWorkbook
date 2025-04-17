let bottomImg, topImg;

function preload(){
  bottomImg= loadImage('./data/IMG_4526blur.jpg');
  topImg= loadImage('./data/IMG_4526.JPG');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(180);
  topImg.resize(width, height);
   image(bottomImg, 0, 0, width, height);
}

function draw(){
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseMoved(){
  copy(topImg, mouseX, mouseY, 150, 150, mouseX, mouseY, 150, 150);
}
