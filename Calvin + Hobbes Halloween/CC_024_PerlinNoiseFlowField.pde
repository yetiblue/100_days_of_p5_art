// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in
//
// Coding Challenge #24: Perlin Noise Flow  Field
// https://youtu.be/BjoM9oKOAKY

FlowField flowfield;
ArrayList<Particle> particles;
PImage img, img2;
boolean debug = false;

void setup() {
  size(1200, 800);
  img = loadImage("calvin.png");
  img2 = loadImage("alien.png");
  flowfield = new FlowField(10);
  flowfield.update();

  particles = new ArrayList<Particle>();
  for (int i = 0; i < 10000; i++) {
    PVector start = new PVector(random(width), random(height));
    particles.add(new Particle(start, random(2, 4)));
  }
  background(255);
}

void draw() {
  //textSize(100);
  //fill(0,50);
  //text("Happy halloween", 200,200);
  image(img, width/2 - 400, height/2);
    img2.resize(215,210);
    image(img2, width - 500, height/2 + 50);
  flowfield.update();
   
  if (debug) flowfield.display();
  
  for (Particle p : particles) {
    p.follow(flowfield);
    p.run();
  }
   


}
