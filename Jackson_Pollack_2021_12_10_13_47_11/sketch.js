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
  

  spc = 50;
  off = w / 8;


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

function makeCell(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.rand = random();
  this.circ = random();


  this.display = function () {
    push();
    // fill(200,0,0)
    stroke(random(palette));
    rad = spc

    for(let a = 0; a<TAU; a+=TAU/100){
    translate(x,y)
    p = rad*cos(a)
    d = rad*sin(a)
    
    noi = noise(x*0.02 ,y*0.02)
    strokeWeight(noi*random(100))
    
    point(p,d)
    }

   
    s = this.s
   



    pop();
  };
}


function draw() {
  
background(200);
translate(wx / 2, wy / 2);
  point(0, 0);

  // noFill();
  // stroke(random(palette));

  
  for (x = 0; x < count; x++) {
    for (y = 0; y < count1; y++) {
      rects[x][y].display();
    }
  }
  noLoop();
}
