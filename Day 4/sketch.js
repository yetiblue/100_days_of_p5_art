function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
  const ctx = drawingContext;
  const x = width / 2;
  const y = height / 2;
  const squareSideDotsCount = 30;
  stroke(0);
  
  const squareVertices = [];
  let startAngle = 45;
  for (let i = 0; i < 4; i += 1) {
    squareVertices.push({
      x: 400 * cos(startAngle),
      y: 400 * sin(startAngle),
    });
    startAngle += 360 / 4;
  }
     
  const square = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < squareSideDotsCount; j += 1) {  
      const x = lerp(
        squareVertices[i].x,
        squareVertices[(i + 1) % squareVertices.length].x,
        j / squareSideDotsCount,
      );
      const y = lerp(
        squareVertices[i].y,
        squareVertices[(i + 1) % squareVertices.length].y,
        j / squareSideDotsCount,
      );
      square.push({ x, y });
    }
  }
  
  push();
  translate(x, y);
   for (let i = 0; i < square.length; i += 1) {
     push();
     stroke(255);
     if (i % 2 === 0) {
        fill(255);
      } else {
        fill(255);
      }
     beginShape();
     vertex(square[i].x, square[i].y);
     vertex(0, 0);
     vertex(
        square[(i + 1) % square.length].x,
        square[(i + 1) % square.length].y,
      );
     endShape(CLOSE);
     pop();
   }
  
  const innerRectSide = 520; //determines overall side length of grid 
  let cellCount = 7;
  const grid = [];
 
  const pointCount = cellCount ** 2; //14 pts total 
  const cellSide = innerRectSide / cellCount; //length of one block 
  const startPoint = -(cellSide * (cellCount - 1))/2; //why -1 for cellCount? 
// for(let cellCount = 7; cellCount > 5; cellCount -=1){
  for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 1) { //tells which row to start
        for (let colIndex = 0; colIndex < cellCount; colIndex += 1) { //runs cellcount number of times to create all the columns in each row . 
            grid.push({
              x: startPoint + colIndex * cellSide,
              y: startPoint + rowIndex * cellSide,
            });
        }
    }
  
  for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 2) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 3) {
            const x = grid[rowIndex * cellCount + colIndex].x;
            const y = grid[rowIndex * cellCount + colIndex].y;
            const halfWidth = cellSide / 4;

            // fill(255) //fill replaced by the gradient below
            makeLinearGradient(
              ctx,
              x - halfWidth,
              y - halfWidth,
              x + halfWidth,
              y - halfWidth,
              [0, 1],
              ['rgb(250, 38, 160)', 'rgb(255, 255, 255)'],
            )
            stroke(255);
          
            rect(x, y, cellSide, cellSide)
        
            circle(x, y, 30);
          
            
           
            
        }
  }
    for (let rowIndex = 1; rowIndex < cellCount; rowIndex += 3) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 4) {
            const x = grid[rowIndex * cellCount + colIndex].x;
            const y = grid[rowIndex * cellCount + colIndex].y;
            const halfWidth = cellSide / 2;

            // fill(255) //fill replaced by the gradient below
            makeLinearGradient(
              ctx,
              x - halfWidth,
              y - halfWidth,
              x + halfWidth,
              y - halfWidth,
              [0, 1],
              ['rgb(255, 215, 0)', 'rgb(255, 255, 255)'],
            )
            stroke(255);
            rect(x, y, cellSide, cellSide)
            circle(x, y, 30);
          
            
           
            
        }
  }
      for (let rowIndex = 3; rowIndex < cellCount; rowIndex += 2) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 2) {
            const x = grid[rowIndex * cellCount + colIndex].x;
            const y = grid[rowIndex * cellCount + colIndex].y;
            const halfWidth = cellSide / 2;

            // fill(255) //fill replaced by the gradient below
            makeLinearGradient(
              ctx,
              x - halfWidth,
              y - halfWidth,
              x + halfWidth,
              y - halfWidth,
              [0, 1],
              ['rgb(47, 243, 224)', 'rgb(255, 255, 255)'],
            )
            stroke(255);
            rect(x, y, cellSide, cellSide)
            circle(x, y, 30);
          
            
           
            
        }
  }
  
  pop();
}
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
