let video;
let soundEffect;

function preload() {
 soundEffect = loadSound('./data/uiia.mp3');
}

function setup() {
createCanvas(windowWidth, windowHeight);
  video = createVideo('./data/ouch.mp4');
  video.hide();
}
 
function draw() {
  background(255);
 image(video, 75, 75, 150, 150);
  let x = (width - video.width) / 2;
  let y = (height - video.height) / 2;
  image(video, x, y);
}

function mousePressed() {
  video.time(0);
  video.play();
  soundEffect.play();
}
