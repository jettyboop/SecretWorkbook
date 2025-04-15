let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
var runningText;
let customFont;

function preload() {
  customFont = loadFont('data/InterTight-Italic-VariableFont_wght.ttf');
}

function setup(){
  background(255);
  createCanvas(windowWidth, windowHeight);
    textFont(customFont);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
 
}
function draw(){
 //gotSpeech();
 //text(runningText, width/2, height/2);
}
function showResult(){
 if (speechRec.resultValue === true) {
   background(255);
   textSize(72);
   fill(0);
   text(speechRec.resultString, 50, height/2);
}
}

function gotSpeech(){
    if(speechRec.resultValue){
       
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
 
  } 