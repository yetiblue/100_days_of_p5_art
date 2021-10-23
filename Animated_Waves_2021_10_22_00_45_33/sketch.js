
function setup() {
  // w = min(windowWidth,windowHeight)
  createCanvas(800, 1200);
 
}


function draw() {
frameRate(60)  
  let color1 = 200;
  background(220)
  for(n = 0; n<height; n+= height/30){
  beginShape();
  curveVertex(0,n)
  for (i = 0; i < width; i+=width/10) {
    var d = dist(i,n,width/2,n)
    curveVertex(i,n-noise( frameCount * 0.03 + n+i*0.28)*(width/2-d)) //framecount * # in the noise is the magic sauce for Y-axis waves that are smooth 
    if(color1 > 50){
      color1 = color1/2
          fill(color1,color1,n) //blue and pink
          // fill(n,color1,color1) //red and pink

          stroke(220, color1, color1)
          // stroke(220)

    } else{
      color1 = 200
       fill(n,color1,color1)
       stroke(220, color1, color1)

    }

    
    
  }
  curveVertex(width,n)
  curveVertex(width,n)
  endShape();
  }
   push();
  noFill();
  strokeWeight(50)
  stroke(color1,color1,n)
  ellipse(width/2, height/2.2, 600) 

  pop();
}

