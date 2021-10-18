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
        let x = i * 75;
        let y = j * 100; //controls spacing on the Y-axis so each layer has a gap
        let z = k * 75;
        push();
        //creates 3 seperate cubes made of cubes and positions each
        translate(x, y+(300*count) - 200, z);
        stroke(100, 100, 100, 60);
        let locX = mouseX - width / 2;
        let locY = mouseY - height / 2;
        //controls where the light is shone on the block using mouse position
        pointLight(255, 255, 255, locX, locY, 50);

        specularMaterial(254,1,154);
        shininess(100);
        //box bounce feature 
        translate(0,random(25));

        box(30, 30, 30); //controls the size of each cell level cube
        pop();
      }
    }
  }

}
}
