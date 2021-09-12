function setup() {
  createCanvas(800, 800);
 
 
  
  
}

function draw() {
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
  const sideLength = 800;
  const halfWidth = sideLength/2;
  const x = width / 2;
  const y = height / 2;
  const ctx = drawingContext;

  background(255, 219, 233);
  noStroke()
   makeLinearGradient(
              ctx,
              x - halfWidth,
              y - halfWidth,
              x + halfWidth,
              y + halfWidth,
              [0, 1],
              ['rgb(255, 167, 68)', 'rgb(255, 255, 255)'],
            )
   push();
   triangle(
              x - halfWidth,
              y - halfWidth,
              x + halfWidth,
              y - halfWidth,
              x + halfWidth,
              y + halfWidth,
            );
  pop();
  push();
fill(255, 167, 68);
 makeLinearGradient(
              ctx,
             300,
             400,
             500,
              400,
              [0, 1],
              ['rgb(255, 128, 177)', 'rgb(255, 239, 218)'],
            )
 drawingContext.shadowOffsetX = -10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  ellipse(x,y,200);
// circle(x,y,200);
  //push and pop allows new shapes to be drawn and colored and not be overwritten by the 
  //nature of the draw() function 
  pop();
  push();
  stroke(255);
  strokeWeight(4);
  line(x - (halfWidth / 1.5), y-halfWidth, x - (halfWidth / 1.5), y+halfWidth )
  line(x - halfWidth, y + (halfWidth / 1.6), x + halfWidth, y + (halfWidth / 2) )

  pop();

  
}