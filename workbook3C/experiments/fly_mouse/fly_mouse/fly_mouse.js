let cursorImg;
let flies = []; 

function preload() {
  cursorImg = loadImage("./data/fly.png");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "9999");
  cnv.style("pointer-events", "none");

  flies.push({
    noiseOffsetX: random(1000),
    noiseOffsetY: random(1000),
    offsetX: 0,
    offsetY: 0
  });
  
  setInterval(() => {
    flies.push({
      noiseOffsetX: random(1000),
      noiseOffsetY: random(1000),
      offsetX: 0,
      offsetY: 0
    });
  }, 8000); 
}

function draw() {
  clear();
  for (let fly of flies) {
    fly.noiseOffsetX += 0.01;
    fly.noiseOffsetY += 0.01;

    fly.offsetX = map(noise(fly.noiseOffsetX), 0, 1, -80, 100);
    fly.offsetY = map(noise(fly.noiseOffsetY), 0, 1, -100, 150);

    image(cursorImg, mouseX + fly.offsetX, mouseY + fly.offsetY, 30, 30);
  }
}