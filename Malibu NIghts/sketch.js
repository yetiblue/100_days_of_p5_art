let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 75;

function setup() {
  createCanvas(windowWidth,windowHeight);
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
background(255, 180, 128) //orange
  noStroke();
  // fill(255);
  fill(255)
  // for (let i = 0; i < 10; i++) {
  //   let xrandom = random(width);
  //   let yrandom = random(height / 2);
  //   ellipse(xrandom, yrandom, 5, 5);
  // }
  push();
  makeLinearGradient(
              ctx,
             150,100,60,250,
              [0, 1],
              ['rgb(255, 200, 177)', 'rgb(220, 239, 218,100)']
            )
  ellipse(410,300, 250, 250);
  // fill(254, 221, 158) //yellow background
  fill(255, 180, 128) //orange backgrund
  ellipse(460,300, 250, 250);
  pop();

   


  for (let j = 0; j < 3; j++) {
    let offsetY = j * 100; //spacing between waves 
    noFill();
    stroke(255,0, 255, 20);
    strokeWeight(height / 2);
    beginShape();
    // curveVertex(1000, height/2); //the left edge vertex
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y*1.01);
    }
    curveVertex(width, height / 2); //the right edge vertex 
    endShape(LINES);
  }

}