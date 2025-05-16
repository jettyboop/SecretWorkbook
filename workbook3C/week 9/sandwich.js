let layers = [];
let images = [];
let imageNames = ["./data/slice.png","./data/baconcooked.png","./data/friedegg.png",  "./data/fly.png", "./data/slice.png"]; // your layer images
let currentLayer = 0;

function preload() {
  for (let name of imageNames) {
    images.push(loadImage(name));
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0); 
  cnv.style('z-index', '-1'); 
  cnv.style('pointer-events', 'none')
}

function draw() {
clear();
  for (let i = 0; i < layers.length; i++) {
    let y = height / 2 - i * 60; 
    imageMode(CENTER);
    image(layers[i], width / 2, y, 400, 200); 
  }
}

function mousePressed() {
  if (currentLayer < images.length) {
    layers.push(images[currentLayer]);
    currentLayer++;
  }
}
