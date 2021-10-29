
function setup() {
  createCanvas(800, 1200);
  drawRect(100, 100, 800, 1200);
}

function drawRect(x, y, w, h,r,g,b)
{
  // first draw a rectangle
  noFill();
  strokeWeight(10);
  fill(r,g,b)
  rect(x, y, w, h)
  push();
  stroke(0)
  strokeWeight(2)
  fill(0)
  // ellipse(x + 0.5*w, y + 0.5*h, w/8,h/8)
  let upsideDown = random();
  if(upsideDown > 0.5){
  triangle(x + 0.25*w, y+0.25*h, x+0.75*w, y+0.25*h, x + 0.5*w, y + 0.75*h)
  }else if (upsideDown > 0.25 && upsideDown < 0.35){
  triangle(x + 0.25*w, y+0.25*h, x+0.75*w, y+0.25*h, x + 0.75*w, y + 0.75*h)

    
  } else{triangle(x + 0.25*w, y+0.75*h, x+0.75*w, y+0.75*h, x + 0.5*w, y + 0.25*h)
}
  pop();

  // then figure out if we need to draw another
  var splitWidth = random(1) > 0.5;
  var splitX=random(0.5,0.6);
  let splitHeight = random(0.4,0.5)

  // if we're splitting the width
  if(splitWidth && w > 100)
  {
    // console.log(h)
    drawRect(x, y, w * splitX, h,108,192,229) ; //draw one rectangle
    console.log("one")
    drawRect(x + (w * splitX), y, w * (1 - splitX), h, 251,201,61); //partition rectangle above by filling in the unused space
    console.log("two")
  }
  // else if we're splitting the height
  else if(h > 100)
  {  
    drawRect(x, y, w, h * splitHeight, 255,255,255);
    drawRect(x, y + (h * splitHeight), w, h * (1 - splitHeight),251,79,79);
  }
}