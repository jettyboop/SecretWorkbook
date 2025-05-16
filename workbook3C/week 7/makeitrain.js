//https://editor.p5js.org/annA/sketches/zaqrFwMH5
let rainImages = [];
let drops = [];


function preload() {
  rainImages.push(loadImage("./data/rain1.png"));
  rainImages.push(loadImage("./data/rain2.png"));
  rainImages.push(loadImage("./data/rain3.png"));
  rainImages.push(loadImage("./data/rain4.png"));
  rainImages.push(loadImage("./data/rain5.png"));
  rainImages.push(loadImage("./data/rain6.png"));
  rainImages.push(loadImage("./data/rain7.png"));
  rainImages.push(loadImage("./data/rain8.png"));
}


function setup() {
   let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0); 
  cnv.style('z-index', '9999'); 
  cnv.style('pointer-events', 'none')
}

function draw() {
 clear();

  for (let drop of drops) {
    drop.y += 1;
    image(drop.img, drop.x, drop.y, 300, 300);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    drops.pop();
  }
}

function mousePressed() {
  addADrop();
}

function addADrop() {
  let drop = {
    x: mouseX,
    y: mouseY,
    img: random(rainImages)
  };
  drops.push(drop);
}
