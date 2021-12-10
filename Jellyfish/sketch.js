function setup() {
  createCanvas(800, 800);
}

let centerX = 400
let centerY = 400
let radius = 300
let numLines = 200;
let numVertices = 50;
function draw() {
  background(0);
  noFill();
  for(l = 0; l<numLines; l++){
    beginShape()
    for(v = 0; v<numVertices; v++){
      
      
      // stroke(50,50,40)
            stroke(250)

      strokeWeight(1)
      
      var n = noise(l
                    *0.2,
                    v
                    *0.2,
                    millis()/400)
      n = map(n,0,1,-10,10)
      curveVertex(centerX + (radius/numVertices*v)
                  *cos(TWO_PI/numLines*l)+n/numVertices*v,
            centerY + (radius/numVertices*v)
                  *sin(TWO_PI/numLines*l)-n/numVertices*v)
    }
     curveVertex(centerX + (radius/numVertices*v)
                  *cos(TWO_PI/numLines*l)+n/numVertices*v,
            centerY + (radius/numVertices*v)
                  *sin(TWO_PI/numLines*l) + 350)
   
    endShape()
  }
}