function setup() {
  w = min(windowWidth, windowHeight)
  createCanvas(w,w);

}

function draw() {
  noLoop();
  background(0);
  drawCenterGlobe()
}


function drawCenterGlobe(){
  push();
  blendMode(BLEND);
  stroke(255;

  numLines = PI/int(random(50,200));
  numPoints = int(random(15,30));

  for(a = 0; a<PI; a+=numLines){
    drawingContext.setLineDash([random(5),random(5)])

    // calculate points on opposite side of a circle
    x1 = w/2+w/4*cos(a); 
    y1 = w/2+w/4*sin(a);

    x2 = w/2+w/4*cos(-a);
    y2 = w/2+w/4*sin(-a);

    // interpolate between each set of points and span a curveVertex on top of them
    beginShape();
    noFill();
    for(v = 0; v<numPoints+1;v++){

      // calculate interpolated points position
      // rat = map(v,0,numPoints,0,3) //bounding of lines. 0,1 is inside of circle
            rat = map(v,0,numPoints,-3,3) //bounding of lines. 0,1 is inside of circle

      ratNeg = 1 - rat

      xn = x1*rat + x2*ratNeg //go sideways if multiple by const!
      yn = y1*rat + y2*ratNeg

      // first and last point need to be doubled
      if(v==0 || v==numPoints){
        curveVertex(xn, yn)
      }

      // calculate distance from center
      // max noise near center, less to no noise the furtehr we go out
      d = dist(xn,yn,w/2,w/2)
      dRat = map(d,0,w/4,1,0) 
      noi = map(noise(xn*0.01,yn*0.01),0,1,-175,175)*dRat

      curveVertex(xn+noi , yn-noi);

      // drawing an additional point on top looks nice
      strokeWeight(2);
      // point(xn+noi,yn-noi)
    }

    strokeWeight(3);
    endShape();noFill();

    ellipse(w/2,w/2,w/2);
  }
  pop();
}