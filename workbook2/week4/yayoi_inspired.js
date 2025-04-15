let eyes = [];
let bgColors = ["#f22b00","#247e17", "white"];
let currentColorIndex = 0;



function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
   angleMode(DEGREES)
    // Set angle mode so that atan2() returns angles in degrees
    angleMode(DEGREES);
  
    describe('eyes that follow the cursor.');
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        eyes.push({ x: x, y: y });
  }
}
  
  function draw() {
    background(bgColors[currentColorIndex]);
  
    for (let eye of eyes) {
        drawEye(eye.x, eye.y);
      }
    }
    
function mousePressed() {
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
  }
  function drawEye(x,y){
    let angle = atan2(mouseY - y, mouseX - x);
    push();
    translate(x, y);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(angle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  
  }
//https://p5js.org/examples/angles-and-motion-aim/
