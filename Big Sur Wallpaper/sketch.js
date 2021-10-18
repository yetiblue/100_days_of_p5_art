let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 75;

function setup() {
  createCanvas(windowWidth,1200);
  noiseY = height * 3 / 4;
}

function draw() {
    const ctx = drawingContext;

  const makeLinearGradient = (
  ctx,
  x1,
  y1,
  x2,
  y2,
  colorStops,
  colors,
) => {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  colorStops.forEach((stop, i) => gradient.addColorStop(stop, colors[i]));
  ctx.fillStyle = gradient;
  return gradient;
};

  // background(0,15);
  // background(254, 221, 158) //yellow
background(252, 87, 94) //orange
  noStroke();
  // fill(255);
  fill(255)
  // for (let i = 0; i < 10; i++) {
  //   let xrandom = random(width);
  //   let yrandom = random(height / 2);
  //   ellipse(xrandom, yrandom, 5, 5);
  // }
  // push();

 
  // ellipse(410,300, 250, 250);
  // // fill(254, 221, 158) //yellow background
  // fill(255, 180, 128) //orange backgrund
  // ellipse(460,300, 250, 250);
  // pop();

   


  for (let j = 0; j < 7; j++) {
    let offsetY = j * 80; //spacing between waves 
    noFill();
    
    stroke(7, 159, 190,50);
    strokeWeight(height);
    beginShape();
   
    curveVertex(800, height); //the left edge vertex
  
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;

      curveVertex(i, y);
      curveVertex(-y*1.75, i*4);
      // stroke(224, 214, 10,40)
      curveVertex(-y*1.75,3000)
      curveVertex(width, 1500)
            // curveVertex(y*1.75,2000)




    }
    curveVertex(width, height / 2); //the right edge vertex 
    endShape(LINES);
  }

}