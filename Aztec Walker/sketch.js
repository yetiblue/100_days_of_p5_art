let x;
let y;
let t = -0.1;
let c = 0;
let n;

function setup() {
  createCanvas(800, 1200);
  x = width / 2;
  y = 800;
  background(35);
  cols = [
   "#ED2938",
    "#FCC602",
    "#FFFFFF",
    "#08C3ED",
   "#ED2938",
    "#FCC602",
    "#FFFFFF",
    "#08C3ED",
    "#FFFFFF",
    "#08C3ED",
  ];
}

function draw() {
   //every few framecounts, use random or noise to deterine a new x,y position for the dot ot start from? 
  if(frameCount % 20 == 0){
    n = noise(t * x, t * y + t) * 15;
     n > 9
        ? (c = 9)
        : n > 8
        ? (c = 8)
        : n > 7
        ? (c = 7)
        : n > 6
        ? (c = 6)
        : n > 5
        ? (c = 5)
        : n > 4
        ? (c = 4)
        : n > 3
        ? (c = 3)
        : n > 2
        ? (c = 2)
        : n > 1
        ? (c = 1)
        : (c = 0);
       stroke(cols[c])
  }

  strokeWeight(15);
  
  point(x, y);
  // stroke(255, 100);

  const r = floor(random(4));
  switch (r) {
    case 0:
      if(x < 730) {
      x = x + 10;
      // stroke(255, 100);
  }

      break;
    case 1:
      if(x > 70)
      x = x - 10;
      // stroke(255, 200,200);

      break;
    case 2:
      if(y < 1140){
      y = y + 10;
      // stroke(25, 200,250);
      }
      break;
    case 3:
      if(y > 60){
      y = y - 10;
      }

      break;
  }
}