function setup() {
  createCanvas(800, 800);
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
  let spacingX =  75
  let spacingY = 125
  let rectX = 100
  let rectY = 400
  background(250, 247, 245);
  drawRect(203, 239, 227,0,0,800,500)
  noStroke();
 
  drawRect(253, 168, 192,100,125,700,600)
  drawRect(253, 245, 147,150,200,rectX,rectY + 50)
  drawRect(250, 247, 245,150 + spacingX *2,200 + spacingY,rectX,rectY/2)
  drawRect(206, 240, 161,150 + spacingX *4,200 + spacingY * 2,rectX,rectY/2)
  push();
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -15;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'white';
  drawRect(203, 239, 227,150 + spacingX *6,200,rectX *2,rectY/8)
  pop()

  fill(251, 207, 198)
 
  drawRect(203, 239, 227,150 + spacingX *6,200,rectX *2,rectY/8)
  push();
   drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = -15;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'white';
   makeLinearGradient(
              ctx,
              425,
              325,
               625,
     325,
              [0, 1],
              ['rgb(255, 167, 68)', 'rgb(255, 255, 255)'],
            )
  
  ellipse(150 + spacingX * 7, 300 + spacingY, 200,200)
  pop();

 
 


  


  
}

function drawRect(R,G,B,X,Y,W,H){
fill(R,G,B)
rect(X,Y,W,H)
}