let bottomImg, topImg;

function preload(){
  bottomImg= loadImage('./data/yayoipumpkinbw.jpg');
  topImg= loadImage('./data/yayoipumpkin.jpg');
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


function mouseDragged(){
  copy(topImg, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
}
