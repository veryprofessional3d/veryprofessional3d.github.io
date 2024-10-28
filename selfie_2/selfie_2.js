function setup() {
createCanvas(600, 600);
background(204);
}
function draw() {

  
fill(210, 183, 172); //head
ellipse(300, 300, 200, 300);


fill(240);  //mouth
ellipse(300, 350, 100, 35);
line(250, 350, 350, 350);
line(275, 335, 275, 365);
line(300, 335, 300, 365);
line(325, 335, 325, 365);

fill(100, 120, 120); //eyes
ellipse(260, 260, 20, 20);
ellipse(340, 260, 20, 20);

  // Create a p5.Color object.
  let c = color(200, 200, 200);
   c.setAlpha(150);
   fill(c);
   rect(230, 240, 55, 40, 15, 15, 15, 15);
   rect(310, 240, 55, 40, 15, 15, 15, 15);

}
