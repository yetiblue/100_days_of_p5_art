palette = ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"];
//palette = ["#1f306e", "#553772", "#8f3b76", "#c7417b", "#f5487f"];
//palette = ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"];

palette = ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f","#1f306e", "#553772", "#8f3b76", "#c7417b", "#f5487f"];
function setup() {
  w = min(windowWidth, windowHeight);
  factor = 0.8
  wx = w*0.8
  wy = w
  createCanvas(wx, wy);
   numDivs = 200;

  sizes = []
  for(a = 0; a<TAU; a+=TAU/numDivs){
    sizes.push(random(0.5,10))
  }
  FPS = 50;
  frameRate(FPS);

  spc = 100;
  off = w / 8;

  //rectMode(CENTER)

  rects = [];
  count = 0;
  for (x = -wx / 2 + off; x < wx / 2 - off; x += spc) {
    row = [];
    count1 = 0;
    for (y = -wy / 2 + off; y < wy / 2 - off; y += spc) {
      row.push(new makeCell(x, y, spc - 5));
      count1++;
    }
    rects.push(row);
    count++;
  }
}
function visualizer(x,y,radius){
  translate(x,y)
   let t = frameCount/FPS //framecount is P5 keeping track of how many frames have passed since sketch started
  
  for(n=0;n<numDivs; n++){
    a = TAU/numDivs * n + t/2
    randomRadius = random(-2,2.5)
    radius += randomRadius;
    x = radius*cos(a);
    y = radius*sin(a);
    
    strokeWeight(sizes[n]);
    point(x,y + random(0,5))
  }
}
function makeCell(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.rand = random();
  this.circ = random();
  this.smolCircs = [
    random([0, 1]),
    random([0, 1]),
    random([0, 1]),
    random([0, 1]),
  ];
  this.lines = [random(), random(), random(), random()];

  this.display = function () {
    push();
    noFill();
    stroke(0);
    let circleRadius;

    stroke(random(palette));
    drawingContext.setLineDash([random(1, 2), random(1, 5)]);
    strokeWeight(random(0.8, 10));
    if (this.rand > 0.3) {
      
      rect(x, y, s, s, random(5), random(5), random(5), random(5));
      

   
    }

    stroke(random(palette));
    
    this.circ = random();

    if (random() > 0.5) {
      circleRadius = 40
            // visualizer(500,500, circleRadius)

    }

   
    stroke(random(palette));
    if (random() > 0.5) {
      ellipse(this.x + this.s / 2, this.y + this.s / 2, this.s / 5);
            ellipse(this.x + this.s / 2, this.y + this.s / 2, this.s / 2);
                  ellipse(this.x + this.s / 2, this.y + this.s / 2, this.s / 3);


            visualizer(this.x + this.s/2, this.y + this.s/2, circleRadius)

    }
    
    s = this.s
   



    pop();
  };
}

function bkgroundGrad(){
  var ctx = canvas.getContext('2d');
  var gradient = ctx.createLinearGradient(0, 0,wx,wy);

  // Add three color stops
  gradient.addColorStop(0, color(random(palette)));
  gradient.addColorStop(1, color(random(palette)));

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;

  ctx.fillRect(-10,-10,wx+10,wy+10);
  ctx.fill()
}

rez = 1;
function draw() {
  
  //bkgroundGrad();
background(0) 
translate(wx / 2, wy / 2);
  point(0, 0);

  noFill();
  stroke(random(palette));

  t = frameCount / 50;
  for (x = 0; x < count; x++) {
    for (y = 0; y < count1; y++) {
      rects[x][y].display();
    }
  }
  noLoop();
}
