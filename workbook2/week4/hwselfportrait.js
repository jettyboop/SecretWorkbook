function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvas-container4");
  //asked chatgpt how to attach a canvas to html
    frameRate
    background(220);
  }
  
  function draw() {
    fill(255,255,0);
    stroke("brown")
  
  

    fill("peachpuff");
    strokeWeight(2);
    ellipse(740, 370, 450, 550);
    triangle(740, 300, 720, 470, 766, 470);  

   
    fill("beige");
    ellipse(620, 350, 150, 100);
    ellipse(860, 350, 150, 100);


    fill("salmon")
    circle(610, 450,70);
    circle(870, 450,70);
    circle(740, 450,20);

    fill ("darksalmon")
    ellipse(740, 550, 150, 70);

    fill("brown")
    circle(620, 350,100);
    circle(860, 350,100);
    line (650, 250, 570, 250)
    line (830, 250, 920, 250)
    line (830, 550, 650, 550)
    line (mouseX,mouseY, 750,100);

   
 
   }