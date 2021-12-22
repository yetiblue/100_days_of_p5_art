function setup() {
  createCanvas(800, 1200);
  xOff = 100;
  noFill();
  background(0)
}

function draw() {
  
  push()
  strokeWeight(5)
  // stroke(0)
  rect(100,50,600,1100)
  pop();
  //background(0,1);
  for (n = 1; n < 2; n++) { //change n value to get cool draw effects try 2 or 20 
    for (x = xOff + 50 ; x < width - xOff; x+=100) {
      t = x / 100 + millis() / 1000 + n*x;
      strokeWeight(1.6)
      // stroke(127.5 + 127.5 * sin(t), 127.5 + 127.5 * cos(t), 127.5);
            stroke(127.5 + 227.5 * cos(t), 127.5 + 127.5 * sin(t), 127.5);


      ellipse(x+100*sin(t*2), //changes width of everything
              600 + 450 * sin(t/2), //constant moves y position, multiplied value before sin() changes height stretch
              20 + 5 * tan(t+noise(t)*10)); //changes radius according to noise value 
                    // 12 + 10 * cos(t+noise(t)*10));

            //values multiplied before cos() = ellipse radius ^
            // value after cos() changes how many circles are drawn in the stroke. Smoothness
    }
  }
  if(frameCount>1000){
    //noLoop()
  }
}
