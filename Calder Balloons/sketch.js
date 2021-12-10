palette = ["#b30000", "#e6cf00", "#1283b3", "#fafafa", "#0a0a0a"]
function setup() {
  w = min(windowWidth, windowHeight)
  
  wx = w
  wy = w
  
  createCanvas(800,1200);
  
  off = 60;
  spacing = 90;
  
  fill(0)
  //noFill()
}

function draw() {
  background('#fdebd3');
  
  for(i = off; i<wx-off; i+=spacing){
    j = i
    let randomLocationX = random(off, j) //random position but still maintin the offset as min value 
        let randomLocationY = random(2 * off,j)

      noFill();
      if(j<wy-off*2){
        createCurveConnection(randomLocationX, randomLocationY,randomLocationX,randomLocationY+spacing) //vertical lines
                // createCurveConnection(randomLocationX, randomLocationY,i,j+spacing)

      }

      noFill();
      if(random()>0.65){
        col = random(palette)
        
        stroke(col)
        fill(col)
        
      }else{
        stroke(0)
        fill(0);
      }
      
      createBlob(randomLocationX, randomLocationY,random(spacing/3, spacing/4))
      
 
  }

}

function createCurveConnection(x1,y1,x2,y2){
  rez = 0.04
  
  strokeWeight(random(1,3.5))
  beginShape()
  for(l = 0; l<1; l+=0.15){
    
    ln = 1 - l
    

    lx = (x1 * l + x2*ln)
    ly = (y1 * l + wy*ln)
    
    deformNoise = map(noise(lx*rez, ly*rez),0,1,-1.5,1.5)*20
    
    lx = (x1 * l + x2*ln) + deformNoise
    ly = (y1 * l + wy*ln)
    
    
    if(l == 0 || ln <1){
      curveVertex(lx, ly)

    }
    curveVertex(lx, ly)
  }
  endShape()
}

function createBlob(posX, posY, rad){
   
  R = rad
  div = TAU/40;
  rez = 0.03;
  
  beginShape()
  for(a = 0; a<TAU+div*3; a+=div){
    r = R
    
    blobX = posX + r*cos(a);
    blobY = posY + r*sin(a);
    
    r = r+r/5*noise(blobX*rez, blobY*rez)

    blobX = posX + r*cos(a);
    blobY = posY + r*sin(a);
    
    curveVertex(blobX, blobY)
  }
  endShape()
  
  noLoop();
}