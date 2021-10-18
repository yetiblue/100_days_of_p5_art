let bg;
function setup() {
  createCanvas(800, 1200, WEBGL);

}

function draw() {
background(251,204,209);
  rotateY(millis() / 2000);
  //Count = repeat big cube 3 times
  //i = create the x-axis layers
  //j = create Y-axis layers
  //k = create Z-axis layers all at once before Y, and X
for(let count = 0; count < 3; ++count){
  for (let i = -4; i <= 4; ++i) {
    for (let j = -4; j <= 0; ++j) {
      for (let k = -4; k <= 4; ++k) {
        let x = i * 25;
        let y = j * 50; //controls spacing on the Y-axis so each layer has a gap
        let z = k * 25;
        push();
        //creates 3 seperate cubes made of cubes and positions each
        translate(x, y+(300*count) - 200, z);
        stroke(100, 100, 100, 60);
        fill(128 + x, 128 + y, 128 + z, 150);
        box(20, 40, 20); //controls the size of each cell level cube
        pop();
      }
    }
  }
  console.log(count)
}
}
