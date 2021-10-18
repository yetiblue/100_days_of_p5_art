let angle = 0

function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(0);

  //First
  scale(1.25);
  translate(50,175)
   fill(0 )
  stroke(255 + mouseY/8, 255 + mouseY/4, 0 + mouseY/2 )

  ellipse(250,250,100 - mouseY/8,100 - mouseY/8)
  fill(243, 14, 140)
  stroke(255, 255,0)
  strokeWeight(8)

  push()
  // fill(255, 183, 178)

  translate(150  - mouseY/8, 150  - mouseY/8)
  rotate(HALF_PI + angle)
  fill(0 )
  stroke(22 + mouseY/8, 210 + mouseY/4, 187 - mouseY/2 )

  arc(0, 0, 100+ mouseY/8, 100+ mouseY/8, PI, HALF_PI)
  pop()

  push()
    // fill(255, 218, 193)

  // strokeWeight(2)
  translate(250, 100 - mouseY/8)
  rotate(HALF_PI *1.5 + angle)
 fill(0 )
  stroke(255 + mouseY/8, 25 + mouseY/8, 40 + mouseY/2 )

  arc(0, 0, 100+ mouseY/16, 100+ mouseY/16, PI, HALF_PI)
  pop()

  push()
    // fill(226, 240, 203)

  // strokeWeight(2)
  translate(150  - mouseY/8, 350 + mouseY/8)
  rotate(HALF_PI * 2.75 + angle)
 fill(0 )
 stroke(25 + mouseY/8, 255 + mouseY/4, 25 + mouseY/2 )

  arc(0, 0, 100+ mouseY/16, 100+ mouseY/16, PI, HALF_PI)
  pop()

  push()
    // fill(255, 154, 162)

  // strokeWeight(2)
  translate(100 - mouseY/8, 250)
  rotate(HALF_PI * 3 + angle)
 fill(0 )
  stroke(255 + mouseY/8, 255 + mouseY/4, 0 + mouseY/2 )
  arc(0, 0, 100+ mouseY/12, 100+ mouseY/12, PI, HALF_PI)
  pop()


  //Second
  // fill(181, 234, 215)
  stroke(255,255,0)
  // strokeWeight(2)

  push()
  // fill(199, 206, 234)
  // strokeWeight(2)
  translate(350  + mouseY/8, 150 - mouseY/8 )
  rotate(HALF_PI * 1.75 + angle)
 fill(0 )
  stroke(25 + mouseY/8, 255 + mouseY/4, 25 + mouseY/2 )
  arc(0, 0, 100+ mouseY/12, 100+ mouseY/12, PI, HALF_PI)
  pop()

  push()
  // strokeWeight(2)
  translate(250, 400 + mouseY/8)
  rotate(HALF_PI * 2.5 + angle)
  fill(0 )
  stroke(255 + mouseY/8, 25 + mouseY/8, 40 + mouseY/2 )

  arc(0, 0, 100+ mouseY/16, 100+ mouseY/16, PI, HALF_PI)
  pop()

  push()
   // fill(255, 154, 162)
  // strokeWeight(2)
  translate(350 + mouseY/8, 350 + mouseY/8)
  rotate(HALF_PI * 2.25 + angle)
  fill(0 )
   stroke(22 + mouseY/8, 210 + mouseY/4, 187 - mouseY/2 )

  arc(0, 0, 100 + mouseY/8, 100+ mouseY/8, PI, HALF_PI)
  pop()

  push()
  // strokeWeight(2)
  translate(400 + mouseY/8, 250)
  rotate(HALF_PI * 2 + angle)
    fill(0 )
  stroke(255 + mouseY/8, 255 + mouseY/4, 0 + mouseY/2 )

  arc(0, 0, 100 + mouseY/16, 100 + mouseY/16, PI, HALF_PI)
  pop()


  angle += 0.0075
}