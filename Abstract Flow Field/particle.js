function Particle() {
  this.pos = createVector(random(-width, width/8), random(height)); //setting to negative will cause it to start at opposite edge 
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 5;
  
  this.prevPos = this.pos.copy();
  
  this.h = 0;
  this.colour = color(0, 0, 0, 5);
  
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.h = (this.h + 1) % 360;
    this.colour = color(this.h, 300, 360, 30);
  };
  
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
  
  this.applyForce = function(force) {
    this.acc.add(force);
  };
  
  this.show = function() {
    stroke(this.colour);
    strokeWeight(5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    // point(this.pos.x, this.pos.y);
    this.updatePrev();
  };
  
  this.updatePrev = function() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
  };
  
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };
}