// PRELOAD IMAGE + IMAGE FOLLOWS MOUSE
var pic;
 
function preload(){
pic=loadImage("./data/HAND.png");
}
function setup() {
let canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0)
canvas.style('pointer-events', 'none')
imageMode(CENTER, CENTER);
}
function draw() {
  if (frameCount % 400 === 0) {

  }
scale(0.05);
image(pic, mouseX/0.05, mouseY/0.05);
}

//week4 cheatsheet +chatgpt
