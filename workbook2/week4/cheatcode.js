function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0, 0, 0);
}
function draw() { 
  noStroke(); 
  fill (0, 0, 255); 
  circle (width/2, height/2, 200); 
  fill (255, 170, 0); stroke(0); 
  circle (mouseX, mouseY, 60); 
  fill(255, 0, 0); noStroke(); 
  rect (200, height/4, 350, 350); 
  fill(255, 255, 0); 
  triangle (0.6*width, height/4, 0.75*width, 0.75*height, 0.45*width, 0.75*height); 
}