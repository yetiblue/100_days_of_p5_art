
function setup() {
  createCanvas(1600, 2400, WEBGL);
  noStroke();
}

function draw() {
  background(0,0,0,0);

  ambientLight(60);

  // add point light to showcase specular material
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);

  push();
  specularMaterial(254,1,154);
  rotateY(millis() / 1500);
    shininess(100);
    rotate(PI / 2.0);
    torus(250, 40, 3);
  pop();
  
  push();
  stroke(254,1,154)
  strokeWeight(5)
  line(-450,200,500,-200)
  stroke(21,240,238)
  line(-450,150,500,-250)


  pop();
  
  
  push();
  specularMaterial(21,240,238);
  shininess(100);
  rotateX(millis() / 1000);
  ambientLight(60);
  torus(60, 25);
  pop();
}