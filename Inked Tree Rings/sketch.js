function setup() {
  createCanvas(800, 800);
  background(220);
  stroke(0);
  strokeWeight(2);
  noFill();
}

let scale = 30;
let resolution = 0.002;
let numPoints = 1000;

let radius = 300;
let numRings = 60;
function draw() {
  for (r = 0; r < radius; r += radius / numRings) {
    beginShape();
    for (a = -TAU/numPoints; a < TAU+TAU/numPoints; a += TAU / numPoints) {
      var x = 400 + r * cos(a);
      var y = 400 + r * sin(a);

      var n = map(noise(x * resolution, y * resolution), 0, 1, -scale, scale);
      strokeWeight(n)

      curveVertex(x + 4* n, y + 4*n);

      if(random()>0.40-0.25*sin(r)){
        endShape();
        beginShape();
      }
    }
    endShape();
  }
  noLoop();
}