let sketch3 = (p) => {
  let circleSize, r, g, b; 
  let xPos, yPos; 


  p.setup = () => {
  let cnv = p.createCanvas(350, 400);
  cnv.parent("canvas-container3");
  //asked chatgpt how to attach a canvas to html
p.frameRate(4);
};

p.draw = () => {
//assign variables a value//
r = p.random(255);
g = p.random(255);
b = p.random(255);
p.background(r, g, b);

circleSize = p.random(0, 120);
    p.ellipse(p.mouseX, p.mouseY, circleSize);


//initialise a for loop to draw 10 ellipse every frame per second. Draw each ellipse will have a random position, size and strokeWeight.
for (let i = 0; i < 10; i++) {
  let lineWeight = p.random(2, 10);
  xPos = p.random(p.width);
  yPos = p.random(p.height);
  p.fill(255, 0, 255);
  p.stroke(255);
  p.strokeWeight(lineWeight);
  p.ellipse(xPos, yPos, circleSize);
}
};
};

new p5(sketch3);

 //turned into p5 instance mode (chatgpt was asked)