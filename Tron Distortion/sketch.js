function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(102,50,200,50);

  
  // noLoop()
  push();
  noFill()
  stroke(250)
  strokeWeight(1)
  // rotate(PI/6)
  // translate(width * 0.8, height * 0.5);
  for(y = -100; y < height + 100; y +=100){
    for(x = -120; x < width + 120; x +=120){
      if(y == 0 || y == 200 || y == 400 || y == 600 || y == 800 || y == 1000 || y == 1200){
        polygon(x - 60,y,100,10)
      }else{
      polygon(x,y, 100, 10)
      }
    }
  }
//   polygon(0, 0, 70, 6);
//     polygon(0, 140, 70, 6);

//     polygon(120, 0, 70, 6);
//       polygon(120, 140, 70, 6);



  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = -PI/6; a < TAU - PI/6; a += angle) {
        ellipse(x, y, 5, 5)
    let expand = map(mouseX, 0, width, 50,150)

    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * (radius + expand);
    let citrusFill = random()
    // if(citrusFill > 0.66){
    //   fill(222, 232, 145)
    //   fill(199, 211, 73,220)
    // }else if (citrusFill > 0.33 && citrusFill < 0.66){
    //   fill(255, 208, 0,220)
    // }else{
    //   fill(254, 2, 41, 100)
    // }
    vertex(sx, sy);
    push()
    stroke(255)
    strokeWeight(3)
    pop()
  }
  endShape(CLOSE);
}
