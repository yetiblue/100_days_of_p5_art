function setup() {
  createCanvas(800, 1000);
  xOff = 50
  
}

function draw() {
  noLoop();
  background(244, 230, 219);
  
  for(n = xOff; n < width - 2 * xOff; n+=8){
  
  beginShape();
strokeWeight(random(5))    
    stroke(0)

  noFill();
    push()
  for(i=xOff; i < height - xOff; i+=25){
    
    curveVertex(n+noise(n + 0.5*i)*20,i, 10000) //scales
   

}
    pop();
    

    endShape();
   push()
    noStroke()
        fill(244, 230, 219)

  rect(xOff, 150, 665,100)
    rect(xOff, 450, 665,100)
  rect(xOff, 750, 665,100)
    rect(500,xOff,100,900)
        rect(200,xOff,100,900)


  pop()

  }
 
}