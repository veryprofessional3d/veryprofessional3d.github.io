function setup() {
  createCanvas(750,750);
  background(250);

}


function draw() {

    background(250);
  
    noStroke();

    //hair
    fill (100,60,60);
    rect (125,90,500,650,200);
 
    //neck
    fill (230, 197, 159);
    rect (280,605,190,175);
 
    //face
    fill (230, 197, 159);
    rect (175,140,400,500,200);
 
    strokeWeight(1);
 
    //left seclar
    fill (255);
    stroke(1);
    ellipse (300,335,90,60);
 
    //right seclar
    fill (255);
    stroke(1);
    ellipse (450,335,90,60);
 
    //right iris
    fill (66, 120, 163,150);
    stroke(1);
    ellipse (450,335,50,60);
 
    //left iris
    fill (66, 120, 163,150);
    stroke(1);
    ellipse (300,335,50,60);
 
    //right pupil
    fill (0);
    ellipse (455,335,25,25);
 
    //left pupil
    fill (0);
    ellipse (294,335,25,25);
 
    //mouth
    fill (200,0,0);
    bezier (290,500,350,580,400,580,460,500);
   
    //nose
    stroke(1);
    noFill();
    bezier (340,420,350,450,400,450,410,420);
 
    //left eyebrow
    fill (100,60,60);
    rect (230,265,120,20,15);
 
    //right eyebrow
    fill (100,60,60);
    rect (400,265,120,20,15);
    
}
