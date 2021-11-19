let n;
var circles = [];

let FPS = 40;




function setup() {
  createCanvas(800, 1000);

 
 n = 1600;
  
  
}

function draw() {
  if (circles.length < n) {
    circles.push(new Circ());  
  }


  background(0);
  for (var i=0; i<circles.length; i++) {
    circles[i].draw();
  }
  push();
  stroke(220);
  strokeWeight(10)
    line(0,height, width/2 + 70 + random(-3,6), height/2 + 270 ) //the vinyl needle 
  pop();

}

function distBetweenCircles(circle1, circle2) {
  
  return (dist(circle1.x, circle1.y, circle2.x, circle2.y) - 0.5*(circle1.r + circle2.r));
  
}
  
function Circ(x_, y_, r_) {
  
  if (x_===undefined) {
    do {
      done = true;
      this.x = random(width);
      this.y = random(height);
      this.r = 1;
      
      minDist = width;
      for (var i=0; i<circles.length; i++) {
        var dOther = distBetweenCircles(this, circles[i]);
        if (dOther < 0) done = false;
        else {
          if (dOther < minDist) minDist = dOther;
        }
      }
    } while(!done);
    this.r -= minDist; // -= makes the circles "fall in" on themselves
  }
  else {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }

  this.draw = function() {
    let t = frameCount/FPS //control how fast the vinyl starts spinning out of control
    push();
    translate(width/2, height/2); //start each circle in the middle instead of randomly like with reg circle packing
    noFill();
    strokeWeight(1)
    stroke(255,0,0);
    ellipse(0, 0, this.r + random(5) * t/10, this.r + random(5) * t/10); //random adds the spinning effect 
    pop();
  }
}