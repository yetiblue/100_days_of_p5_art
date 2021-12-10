function setup() {
  w = min(windowWidth * 1.2, windowHeight * 1.2)
  createCanvas(w,w);

}

function draw() {
  noLoop();
  background("#6B011F");
  // background("#009DAE")
  drawCenterGlobe()
}


function drawCenterGlobe(){
  
  // ---------- Lifted Noodles ----------------- //

  push();
  blendMode(BLEND);

  numLines = PI/int(random(150,200));
  numPoints = int(random(15,30));

  for(a = PI/2; a<PI; a+=numLines){
    drawingContext.setLineDash([random(5),random(5)])

    // calculate points on opposite side of a circle
    x1 = w/2+w/4*cos(a);
    y1 = w/2+w/4*sin(a);

    x2 = w/2+w/4*cos(-a);
    y2 = w/2+w/4*sin(-a);
   push();
      for(n = 550; n < 600; n+=20){
  push();
  beginShape();

  strokeWeight(random(1,6))
  stroke("#D4AC2B")
        // stroke("#95E1D3")
  
  noFill();
  for(i=500; i < 1030; i+=25){
    curveVertex(n+noise(n + 0.5*i)*50,i)
}

  endShape();
  }
    pop();
    // ---------- Chopsticks ----------------- //
    push();
    stroke("#FFCE45")
    // stroke("#FFE652")
    line(100,1400,w/2-50,w/2 + 250)
    line(150,1300,w/2 - 50,w/2 + 250)
    pop();
    
    // ---------- Bowl Noodles ----------------- //

    // interpolate between each set of points and span a curveVertex on top of them
    beginShape();

    noFill();
    for(v = 0; v<numPoints+1;v++){

      // calculate interpolated points position
      rat = map(v,0,numPoints,0,1)
      ratNeg = 1 - rat

      xn = x1*rat + x2*ratNeg
      yn = y1*rat + y2*ratNeg 

      // first and last point need to be doubled
      if(v==0 || v==numPoints){
        curveVertex(yn,xn)
      }

      // calculate distance from center
      // max noise near center, less to no noise the furtehr we go out
      d = dist(xn,yn,w/2,w/2)
      dRat = map(d,0,w/4,1,0)
      noi = map(noise(xn*0.01,yn*0.01),0,1,-175,175)*dRat

      curveVertex(yn-noi,xn+noi);

      // drawing an additional point on top looks nice
      strokeWeight(2);
      // point(xn+noi,yn-noi)
    }

    strokeWeight(3);
    endShape();noFill();
   
    // ---------- Bowl----------------- //

    push();
    strokeWeight(20)
    stroke(220)
    // stroke("#C2FFF9")
    arc(w/2,w/2,w/2, w/2, PI + 25, TWO_PI - 25);
    // ellipse(w/2,w/2,w/2);
    pop();
  }
  pop();
}