function setup() {
  createCanvas(800, 1200);
}

let centerX;
let centerY;
let lightPalette = ["#AFDCEB", "#CAE9F5", "#F0F8FF", "ADD8E6", "#86C5D8"]
let darkPalette = ["#04048B", "#1F3FAB", "#6157BD", "#45D1D1", "#48E0D1"]
let radius = 100
let numLines = 100;
let numVertices = 50;
function draw() {
  background(0);
  noFill();
  noLoop();
  
  for(jellyFishCount = 0; jellyFishCount < 8; jellyFishCount ++){
    centerX = int(random(100, 700))
    centerY = int(random(100,1100))
         // stroke(lightPalette[int(random(5))])
    stroke(darkPalette[int(random(5))])


  
  for(l = 0; l<numLines; l++){
    beginShape()
    for(v = 0; v<numVertices; v++){
      
      
      // stroke(50,50,40)

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
                  // *sin(TWO_PI/numLines*l) - random(-5000,5000)) //epicness
                      *sin(TWO_PI/numLines*l) -500) //epicness

   
    endShape()
  }
  }
}