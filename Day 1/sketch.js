function setup() {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  const ctx = drawingContext;
  const x = width / 2;
  const y = height / 2;
  const squareSideDotsCount = 30;
  
  const squareVertices = [];
  let startAngle = 45;
  for (let i = 0; i < 4; i += 1) {
    squareVertices.push({
      x: 600 * cos(startAngle),
      y: 600 * sin(startAngle),
    });
    startAngle += 360 / 4;
    console.log(squareVertices[0.5])
    //fancy way of using trig to create the 4 points of the square. Change '400' to 
    //change size of the square sides length 
  }
     
  const square = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < squareSideDotsCount; j += 1) {  
      const x = lerp(
        squareVertices[i].x,
        squareVertices[(i+8) % squareVertices.length].x,//if remainder 0 no points are drawn on top and bottom
        j / squareSideDotsCount,
      );
      const y = lerp(
        squareVertices[i].y,
        squareVertices[(i+6) % squareVertices.length].y, //if remainder here is 0, then no points are drawn on the left and right. 
        j / squareSideDotsCount,
      );
      square.push({ x, y });
     
    }
  }
  
  // push();
  translate(x, y);
   for (let i = 0; i < square.length; i += 1) {
     push();
     noStroke();
     if (i % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
     beginShape();
     vertex(square[i].x, square[i].y);
     vertex(100, 100); // controls the middle portion and how much white space there is 
     vertex(
        square[(i + 1) % square.length].x,
        square[(i + 1) % square.length].y,
      );
     endShape(CLOSE);
     pop();
   }
  // pop();
}

Day 1 ////






