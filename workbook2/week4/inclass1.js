let sketch1 = function(p) {
  p.setup = () => {
  let cnv = p.createCanvas(350, 400);
  cnv.parent("canvas-container");
  p.background(240);
  //asked chatgpt how to attach a canvas to html
};

p.draw = () => {
  p.fill(255, 255, 0);
  p.stroke("blue");
  p.strokeWeight(4);

  p.ellipse(p.width / 2, p.height / 2, 200, 600);
  p.fill("blue");
  p.line(100, 0, 600, 500);

  p.circle(p.mouseX, p.mouseY, 100);
  p.fill("red");
  p.triangle(200, 500, 300, 0, 400, 400);

  p.fill("orange");
  p.square(p.width / 2, p.height / 2, 300);
};
};
new p5(sketch1);
 //turned into p5 instance mode (chatgpt was asked)