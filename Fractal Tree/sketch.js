/// <reference path="../TSDef/p5.global-mode.d.ts" />

let size = 220;
let angle = 20;
/*Cool angle Values: 
20 = Flower
45 = Grid
60 = Snowflake
90 = Funky
120 = Sirpinski Triangle
*/

//Set animate to 1 to animate the fractal / 0 for static image
let animate = 1;

//Set mouseMove to 1 to bind the angle and size to your mouse!
//Generate your own Fractal!
let mouseMove = 0;

function setup() {
  createCanvas(900, 900, P2D);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(1);
  translate(width / 2, height / 2);
  createFractal(size, angle);

  if (animate == 1) {
    angle += 0.5;

  }
  if (mouseMove == 1) {
    angle = map(mouseX, 0, width, 0, 180, true);
    size = map(mouseY, 0, height, 100, 250, true);
  }
}

function createFractal(size, angle) {

  if (size > 3) {

    stroke(250, 250 - size, 0);

    strokeWeight(map(size, 0, 180, 0, 10, true));
    noFill()
    //Up Right
    push();
    rotate(radians(angle));
    line(0, 0, size, 0);
    translate(size, 0);
    createFractal(size / 2, angle); //the recursive part, calls itself but shrink size by 2 and add on to end
    pop();

    // Down Right
    push();
    rotate(radians(-angle));
    line(0, 0, size, 0);
    translate(size, 0);
    createFractal(size / 2, angle);
    pop();

    //Up Left
   

    //Down Left
    push();
    rotate(radians(angle * -3));
    rect(0, 0, size, 10);
    // fill(255,size,size)
    // noFill()
    translate(size, 0);
    createFractal(size / 2, angle);
    pop();
     push();
    rotate(radians(angle * 3));
    // stroke(255)
    rect(0, 0, size, 10);
    translate(size, 0);
    createFractal(size / 2, angle);
    pop();
    //  push();
    // rotate(radians(angle * 4));
    // // stroke(255)
    // rect(0, 0, size, 10);
    // translate(size, 0);
    // createFractal(size / 2, angle);
    // pop();
    //  push();
    // rotate(radians(angle * -4));
    // // stroke(255)
    // rect(0, 0, size, 10);
    // translate(size, 0);
    // createFractal(size / 2, angle);
    // pop();
   
  }
}