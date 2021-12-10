function setup() {
  createCanvas(800, 1000);
  xOff = 50
  
}

function draw() {
  noLoop();
  background(244, 230, 219);

  for(n = xOff; n < width - 2 * xOff; n+=8){
  
  beginShape();
    // stroke(0) //scales
        stroke(random(120))

  noFill();
    push()
  for(i=xOff; i < height - xOff; i+=2){
    // curveVertex(n+noise(n + 0.5*i)*50,i, 10000) //scales

    curveVertex(n+noise(n + 0.5*i)*50,i+noise(n + 0.5*i)*50, 10000) //crosshatch
}
    pop();
    

    endShape();
   
  }
 
}