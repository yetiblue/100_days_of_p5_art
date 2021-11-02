var x = 0;
let startX = 600;
let startY = 600;
function setup() { 
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
} 

function draw() { 
  background(220);
	noLoop();

  strokeWeight(2)
	
  for(j = 0; j <30; j++){
    rotate(0)
  translate (startX + 25 * j, startY);
  //   console.log(startX + 100*j)
  //  // ellipse(0,0,140)

  pattern(random(30,120), random(2, 4), random(0.02, 0.06))
 
  }
	
}
function pattern(iterations, sizeInc, rotateAmount){
  let j = 0; 
  push();
     let size = 100
    console.log("called")
   for(i = 0; i< iterations; i++){
     // push();
    rotate(rotateAmount)
    noFill();
    size += sizeInc
     j++
    
    rect(0, 0, size, size);
     pop();
    
  }

}