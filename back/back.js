let img;

// Load the image.
function preload() {
  img = loadImage('../images/bak.png');
}


function setup() {
  createCanvas(600, 600);
  background(220);

 
}

function draw() {
  
    image(img, 0, 0, 600, 600);
  
   fill(240, 200, 170);
  ellipse(200, 300, 150, 200);

  fill(255);
  ellipse(170, 280, 30, 15); 
  ellipse(230, 280, 30, 15); 

  fill(0);
  ellipse(170, 280, 10, 10); 
  ellipse(230, 280, 10, 10); 

  stroke(50);
  strokeWeight(4);
  line(150, 260, 190, 263); 
  line(210, 263, 250, 260); 

  noFill();
  strokeWeight(2);
  beginShape();
  vertex(200, 290);
  vertex(195, 320);
  vertex(205, 320);
  endShape();

  noStroke();
  fill(255, 80, 80);
  arc(200, 350, 50, 20, 0, PI); 

//hair

  fill(0); 
  noStroke();
  
  beginShape();
  vertex(175, 210);
  vertex(185, 190);
  vertex(195, 170);
  vertex(205, 160);
  vertex(215, 170);
  vertex(225, 190);
  vertex(235, 210);
  endShape(CLOSE);


  arc(160, 230, 60, 80, PI + QUARTER_PI, 0); 
  arc(240, 230, 60, 80, PI, HALF_PI); 

  fill(240, 200, 170);
  rect(175, 400, 50, 50);

  fill(100, 150, 255);
  rect(125, 450, 150, 100);

  fill(240, 200, 170);
  ellipse(130, 300, 20, 40); // Left ear
  ellipse(270, 300, 20, 40); // Right ear
  
}
