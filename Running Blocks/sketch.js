let bg;
function setup() {
  createCanvas(800, 1200, WEBGL);

}

function draw() {
background(240);
  noFill();
  strokeWeight(random(3))
  // rotateY(millis() / 2000);
  //Count = repeat big cube 3 times
  //i = create the x-axis layers
  //j = create Y-axis layers
  //k = create Z-axis layers all at once before Y, and X
for(let count = 0; count < 3; ++count){
  for (let i = -4; i <= -1; ++i) {
    for (let j = -2; j <= 0; ++j) {
      for (let k = -1; k <= 1; ++k) {
        let x = i * 60 + random(15);
        let y = j * 90 + random(-20,20); //controls spacing on the Y-axis so each layer has a gap
        let z = k * 175+ 50;
        push();
        //creates 3 seperate cubes made of cubes and positions each
        translate(x, y+(300*count) - 200, z);
        stroke(100, 100, 100, 60);
        // fill(128 + x, 128 + y, 128 + z, 150);
        box(40, 60, 40); //controls the size of each cell level cube
        pop();
      }
    }
  }
  noLoop();
  console.log(count)
}
  for(let count1 = 0; count1 < 3; ++count1){
  for (let a = 1; a <= 4; ++a) {
    for (let b = -2; b <= 0; ++b) {
      for (let c = -1; c <= 1; ++c) {
        let d = a * 60 + random(15);
        let e = b * 90 + random(-20,20); //controls spacing on the Y-axis so each layer has a gap
        let f = c * 175 + 50;
        push();
        //creates 3 seperate cubes made of cubes and positions each
        translate(d, e+(300*count1) - 200, f);
        stroke(100, 100, 100, 60);
        // fill(128 + x, 128 + y, 128 + z, 150);
        box(40, 60, 40); //controls the size of each cell level cube
        pop();
      }
    }
  }
  // noLoop();
}
}
