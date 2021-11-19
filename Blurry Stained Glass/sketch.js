
function setup() {
  createCanvas(800, 1200);
    pixelDensity(0.07)

  drawRect(100, 100, 800, 1200);
}
// function draw(){
//   noLoop();
//   let spacing = 20 * random();
//   for(x = 0; x < width; x += spacing){
//     for(y = 0; y < height; y += spacing){
//       fill(random(50), random(50), random(50))
//       ellipse(x,y,2,2)
//     }
//   }
// }
function drawRect(x, y, w, h)
{
  // first draw a rectangle
  noFill();
  strokeWeight(10);
  fill(random(250), random(230), random(150),255)
  rect(x, y, w, h)
  

  // then figure out if we need to draw another
  var splitWidth = random(1) > 0.1;
  var splitX=random(0.5,0.6);
  let splitHeight = random(0.1,0.4)

  // if we're splitting the width
  if(splitWidth && w > 100)
  {
    // console.log(h)
    drawRect(x, y, w * splitX, h) ; //draw one rectangle
    console.log("one")
    drawRect(x + (w * splitX), y, w * (1 - splitX), h); //partition rectangle above by filling in the unused space
    console.log("two")
  }
  // else if we're splitting the height
  else if(h > 100)
  {  
    drawRect(x, y, w, h * splitHeight);
    drawRect(x, y + (h * splitHeight), w, h * (1 - splitHeight));
  }
}