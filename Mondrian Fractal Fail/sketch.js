let offset = 50; 
let tileStep = 100;
let rectArray = []
let pointArray = []
let totalRects = []

let centerValue = tileStep/2 

function setup() {
  createCanvas(800, 1200);
}

function draw(){  
  noLoop();
  background(0)
 
  for( let x = offset; x < width - offset; x += tileStep) {
    for( var y = offset; y < height - offset; y += tileStep) {
      fill(0)
      stroke(220)
      strokeWeight(3)
      rect(x, y, tileStep); //plot grid of starting rectangles
      let tile = {x: x, y: y} 
      rectArray.push(tile); //push rectanges into an array to start, to get the length of the array
     
      // pointArray.push({x: x + centerValue, y: y + centerValue})
      // for(let i = 0; i < pointArray.length - 1; i ++){
      //   // stroke(0)
      //   ellipse(pointArray[i].x, pointArray[i].y, 5)
      // }
      divide()

    }
  }
  console.log(rectArray)
 
}

function divide(){
  let subdivideCount = 0; //how many rectangles are subdivided. Value to be multiplied by 4
  totalRects = rectArray.length
  // for(let iterations = -1;iterations < 2; iterations ++){ simulate recursive calling of describe() 
   for(let j = 0; j < rectArray.length + (4*subdivideCount); j ++){ //rectArray should be a running count of rectangles drawn. The original 77 + four times subdivideCount to represent the rectangles that were split.
     
     let subdivide = random()
     // console.log(subdivide)
     if(subdivide > 0.6 && subdivide < 0.99){ //split this rectangle into 4. 
        subdivideCount = subdivideCount + 1 //count how many rectangles were selected for subDivision 
        console.log(subdivideCount, rectArray.length)
          )
          let subRect1 = ({x: rectArray[j].x, y: rectArray[j].y, w: centerValue})
          let subRect2 = ({x: rectArray[j].x + centerValue, y: rectArray[j].y, w: centerValue})
          let subRect3 = ({x: rectArray[j].x,y:  rectArray[j].y + centerValue, w: centerValue})
          let subRect4 = ({x: rectArray[j].x + centerValue, y: rectArray[j].y + centerValue, w: centerValue})
          rectArray.push(subRect1, subRect2, subRect3, subRect4)
         
         for(iterate = 0; iterate < rectArray.length; iterate ++){
           rect( rectArray[iterate].x, rectArray[iterate].y,  rectArray[iterate].w)
         }
          
        

     }
     else if (subdivide < 0.6){
       subdivideCount = subdivideCount
        rect(rectArray[j].x,rectArray[j].y, centerValue * 2)
}
     
  }
  //divide centerValue by 2 each time divide() is called recursively 
  if(centerValue > 12.4){
  centerValue = centerValue / 2
  }
  
  
   
  
}

