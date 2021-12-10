let xCoord;
let yCoord;
let w;
let locations = []
function setup() {
  w = min(windowWidth, windowHeight)
  createCanvas(w, w);
}

function draw() {

  rect(100,100,600,600)
  for(let treeCount = 0; treeCount < 6; treeCount++){
      xCoord = int(random(400,700))
      yCoord = int(random(400,1000));
      locations.push({x: xCoord, y: yCoord})
      // console.log(locations)
    locations.forEach((pair)=>{
      console.log(pair.x, pair.y)
      drawTree(pair.x,pair.y)
    })
     // drawTree(locations)
  }
  // noLoop();
}
function drawTree(xCoord, yCoord){
   // translate(xCoord, yCoord)
  translate(w/2, w/2 + 100)
  

  
//   console.log(xCoord, yCoord)
//   translate(xCoord, yCoord);
  rotate(PI)
  background(220);
  
  len = random(w/4,w/3)
  divs = int(random(80,100))
  

  
  segLength = (len/divs)*4
    
  line(0,0,0,len+segLength)
  line(0,0,0,-200)
  for(n = segLength; n<len+segLength; n+=segLength){
    strokeWeight(3)
    
    randOff = random(-2,2)
    
    point(0,constrain(n+randOff,0,len+segLength))
    
    strokeWeight(random(1,4))
    d = dist(0,n+randOff * 2,0,0)
    dWeight = map(d,0,len,1,0) *5
    randHorR = random(0,30)*dWeight
    randHorL = random(-30,0)*dWeight
    drawingContext.setLineDash([random(10), random(10)])
    line(randHorL,n+randOff, randHorR, n+randOff)
    
    
  }
}