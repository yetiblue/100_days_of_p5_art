
function setup() {
  w = min(windowWidth, windowHeight)
  createCanvas(w, w);

  off = 50;
  spc = 35;
  strokeWeight(4)
}
prevx1 = 0;
prevx2 = 0;
prevrad = 0;
function draw(){
  background(178,64,128,70);
//speed control
  t = frameCount/50;

  for(x =off; x<w-off; x+=spc){
    d = dist(x,x,w/2, w/2)
    dmap = map(d, 0, w/2+off/2,1,0)
    rad = 180*dmap
    strokeWeight(dmap*50)
   //inner circles
    stroke(181,255,217)
    offsetAmount = 40;
    div = TAU/6;
    x1 =  x + offsetAmount*sin(5*x + t) *dmap
    x2 = x - offsetAmount*sin(5*x + t) * dmap
   
    point(
      x1,x2)
    push();

for (a = t; a < TAU + t; a += div) {
      strokeWeight(dmap*5)
      //wireframe
      px = x1+rad*cos(a);
      py = x2 + rad*sin(a)
      point(px,py)
      stroke(220)
       prevX = x1 + rad*cos(a+div);
       prevY = x2 + rad*sin(a+div)
       strokeWeight(1);
       line(px,py,prevX,prevY)
        stroke(0)
      //connecting wireframes
      connectx = prevx1 + prevrad * cos(a);
      connecty = prevx2 + prevrad * sin(a);
       if(x != off){
        line(px,py,connectx, connecty)
      }
       
    }

         prevx1 = x1;
        prevx2 = x2;
        prevrad = rad;
      pop();

    
    
  

  }
}