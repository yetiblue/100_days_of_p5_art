var inc = 100.1;
var scl = 100;
var cols, rows;

var zoff = 0;

var particles = [];

var flowfield;

function setup() {
  createCanvas(800, 1200);
  colorMode(HSB, 250);
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }
  background(0);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * -TAU; //TAU/2 - TAU/6 for sideways lines | TAU for hair | 
      var v = p5.Vector.fromAngle(random(angle));
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 100);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1);
      // line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}