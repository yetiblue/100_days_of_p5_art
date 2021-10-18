function setup() {
  createCanvas(800, 1400);
  xOff = 50
  
}

function draw() {
  background(244, 230, 219);
   
  for(n = xOff; n < width - 2 * xOff; n+=8){
  
  beginShape();

  strokeWeight(random(1,6))
     if(n == 74 || n == 90){
      strokeWeight(3)
      stroke(173, 0, 1)
    }else if (n == 480 || n == 602) {
      strokeWeight(4)
      stroke(0, 113, 175)
    }else{stroke(0)}
  
  noFill();
  for(i=xOff; i < height - xOff/4; i+=25){
    curveVertex(n+noise(n + 0.5*i)*50,i)
}

  endShape();
  }
  push();
   noLoop();
    fill(0)
   for(i = 0; i < 90; i++){
    ellipse(random(xOff, width- 2 * xOff), random(xOff, height - 2 * xOff), random(20,70))
     if(i == 20 || i == 55 || i == 62 || i == 87){
       noStroke();
       fill(173, 0, 1,200)
     } else if (i == 38 || i == 29 || i == 79) {
         noStroke()
        fill(0, 113, 175,200)}
     else if(i == 69){ //why not?
       noStroke();
       fill(255)
     }
     else{fill(0)}
  }
  pop();
}