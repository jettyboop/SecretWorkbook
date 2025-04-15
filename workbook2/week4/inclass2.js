let sketch2 = function(p) {
    let circleSize, r, g, b;

    p.setup = function() {
    let cnv = p.createCanvas(350, 400);
  cnv.parent("canvas-container2");
  //asked chatgpt how to attach a canvas to html
    p.frameRate(5);
    p.background(220);
    p.text("hello world", 50, 100);
    };

    p.draw = function() {
    circleSize = p.random(100, 800);
    r = p.random(255);
    g = p.random(255);
    b = p.random(255);
    
    p.fill(r,g,b, 20)
    p.textSize(30);
    //circle(width/2, height/2, mouseX);
    p.circle(p.width/2, p.height/2, circleSize);
    p.square(p.mouseX, p.mouseY, circleSize);
    };
};

new p5(sketch2);

    //turned into p5 instance mode (chatgpt was asked)