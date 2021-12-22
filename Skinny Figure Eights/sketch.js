function setup() {
  createCanvas(800, 1200);
  xOff = 100;
  noFill();
  background(0,100)
}

function draw() {
  // background(0);
  push()
  strokeWeight(5)
  // stroke(0)
  rect(100,50,600,1100)
  pop();
  for (n = 1; n < 2; n++) {
    for (x = xOff + 50 ; x < width - xOff; x+=100) {
      t = x / 100 + millis() / 1000 + n*x;
      strokeWeight(1.6)
      // stroke(127.5 + 127.5 * sin(t), 127.5 + 127.5 * cos(t), 127.5);
            stroke(127.5 + 227.5 * cos(t), 127.5 + 127.5 * sin(t), 127.5);


      ellipse(x+55*sin(t*2), 
              600 + 300 * sin(t/2), 
              12 + 10 * cos(t+noise(t)*10));
      //arc(x, 200+100*sin(t),10,10,PI+t,TAU+t)
    }
  }
  if(frameCount>1000){
    //noLoop()
  }
}
