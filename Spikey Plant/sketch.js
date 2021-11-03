
function setup() {
  // w = min(windowWidth,windowHeight)
  createCanvas(800, 1200);
 
}


function draw() {
frameRate(60)  
  let color1 = 200;
  background(0,0,52)
   push();
  noFill();
  strokeWeight(50)
  stroke(230)
  ellipse(width/2, height/2.2, 600) 

  pop();
  for(n = 600; n<height + 50; n+= height/15){
  beginShape();
  // curveVertex(0,n)
  for (i = 100; i < width -50; i+=width/12) {
    var d = dist(i,n,width/2,n)
    curveVertex(i,n-noise( frameCount/2 * 0.02 + n+i*0.28)*(width/2-d)) //framecount * # in the noise is the magic sauce for Y-axis waves that are smooth 
    
      curveVertex(width/2,n)

    if(color1 > 50){
      color1 = color1/2
          
        fill(128, 172, 49)
      stroke(128, 172, 49)

         

    } else{
      color1 = 200
       fill(n,color1,color1)
          
        stroke(n,color1,color1) //red and pink


    }

    
    
  }
    
  // curveVertex(width,n)
  // curveVertex(width,n)

  endShape();
  }
  
}

