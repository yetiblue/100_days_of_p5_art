let n;
var circles = [];

// this doesn't look right -- initial circles could be bigger
let xspacing = 16;    // Distance between each horizontal location
let w;                // Width of entire wave
let theta = 0.0;      // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0;   // How many pixels before the wave repeats
let dx;               // Value for incrementing x
let yvalues;  // Using an array to store height values for the wave
let waveValue;
let FPS = 40;

function calcWave() { //produces a smooth array of values for the alpha value of text to use
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
    waveValue = yvalues[0]*3
  }
}


function setup() {
  createCanvas(800, 1000);
  // smooth();
  //noLoop();
   w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
 n = 1600;
  
  
}

function draw() {
  if (circles.length < n) {
    circles.push(new Circ());  
  }
    calcWave();

  background(0);
  for (var i=0; i<circles.length; i++) {
    circles[i].draw();
  }
  

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
    this.r -= minDist;
  }
  else {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }

  this.draw = function() {
     let t = frameCount/FPS
    push();
    translate(width/2, height/2);
    noFill();
    strokeWeight(1)
    stroke(90,330,255);
    ellipse(0, 0, this.r + waveValue, this.r + waveValue);
    pop();
  }
}