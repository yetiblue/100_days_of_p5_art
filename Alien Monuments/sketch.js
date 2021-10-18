let xOff = 0.0;
let yOff = 0.0;

function setup() {
  createCanvas(800,1200)
  background(255)
  noiseSeed(random(100));
  stroke(0, 10);
}

function draw() {
  xOff += 0.001 //resolution of the noise *smoothness of the final gradient*
  yOff += 0.01
  let n = noise(xOff * width, yOff * height) * width; //noise returns between 0 and 1. Scale up to fit between 0 and the width of the canvas 
  // stroke(255)
  stroke(n/2,n/4,n)
  strokeWeight(random(10))
  // line(width/2, height/2, n, 0);
  line(width/2, height/2, n, height);
  // stroke(255)
line(n, 0, n, height)
     stroke(n/4,n/2,n)
  
  noFill();
  ellipse(random(n*2), random(n*2), n)

}