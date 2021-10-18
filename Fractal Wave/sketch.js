// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0;
var slider;

function setup() {
  createCanvas(800, 1200);

  slider = createSlider(-PI/2,0, PI / 4, 0.01);
  stroke(255)
}

function draw() {
  background(51);
  angle = slider.value();
  // noFill();
    fill(251, 148, 220);

  // fill(random(255))
  // strokeWeight(2)
  
  translate(400, height);
  branch(200);

}

function branch(len) {
  // triangle(len/4, -410, -len,-400, len, -400);
  rect(-600,len, -len,-200);
  translate(len, -len);
  if (len > 4) {
    push();
    
    // rotate(-angle/2);
    branch(len * 0.67);
    // fill(0)
    pop();
    push();

    // fill(255)
    rotate(angle);
    branch(len * 0.80);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}