function setup() {
  // windowSize = min(windowWidth,windowHeight)
  createCanvas(800,1200);
  xOff = 10
  yOff = 150
}

function draw() {
  // background(255,219,148);
  background(220)
for(let n = -yOff; n < height; n+=15){
  beginShape();
  for (i = xOff; i < width-xOff; i+=55) {
    noFill()
    // stroke(252, noise(n * 87), noise(n *94))
    stroke(50 + n/8, 180 + n/10, 230 + n/5)
    // stroke(255)
    let d = dist(i,n,width/2,n) //distance from point versus the center 
    strokeWeight(8)
    curveVertex(i,(n)-noise(n-i*0.5)*(100-d*1.5)) // '-' will make it go up, '+' makes it go down 
      // curveVertex(i,600)

    
  }
  endShape();
}
}