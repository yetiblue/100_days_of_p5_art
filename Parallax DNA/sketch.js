// function setup() {
//   w = min(windowWidth, windowHeight)
//   createCanvas(w,w)
//   off = 50;
//   spc = 15;
  
//   strokeWeight(4)
// }

// function draw() {
//   background(220);
//   t = frameCount/50;

//   for(x = off; x < w-off; x+=spc){
//     offsetAmount = 10;
//     point(x + offsetAmount*sin(t +x),x + offsetAmount*sin(t + x))
//   }
// }
function setup() {
  w = min(windowWidth, windowHeight)
  createCanvas(w, w);

  off = 50;
  spc = 15;
  strokeWeight(4)
}

function draw(){
  background(1255, 85, 162,80);

  t = frameCount/50;

  for(x =off; x<w-off; x+=spc){
    d = dist(x,x,w/2, w/2)
    dmap = map(d, 0, w/2+off/2,1,0)
    strokeWeight(dmap*50)
    stroke(100, 226, 248)
    offsetAmount = 30;
    x1 =  x + offsetAmount*sin(4*x + 4*t) *dmap
    x2 = x - offsetAmount*sin(4*x + 4*t) * dmap
    for(mult = -1; mult < 2; mult ++){
    shift = 100;
    point(
      x1 + shift * mult,x2)
    
    }
    // push();
    // strokeWeight(5)
    //  point(x - offsetAmount*tan(t +2 *x),x + offsetAmount*cos(t + 2 *x))
    // pop();


  }
//   for(x =off; x<w-off; x+=spc){
    
//     d = dist(x,x,w/2, w/2)
//     dmap = map(d, 0, w/2+off/2,1,0)
//     strokeWeight(dmap*50)
//     modifier = x*4
//     offsetAmount = 30;
//     x1 = x + offsetAmount * sin(modifier + t) * dmap;
//     x2 = x - offsetAmount * sin(modifier + t) * dmap;
//     point(
//       x1,x2)
   
//     // push();
//     // strokeWeight(5)
//     //  point(x - offsetAmount*tan(t +2 *x),x + offsetAmount*cos(t + 2 *x))
//     // pop();


//   }
  // for(x = off; x < w-off; x+=spc){
  //   offsetAmount = 10;
  //   point(x + offsetAmount*sin(t +x),x + offsetAmount*sin(t + x))
  // }

}