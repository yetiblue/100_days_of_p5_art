let n;
var circles = [];

let FPS = 40;
let colorArray = [
 	"#ffc100",
"#ff9a00",
"#ff7400",
"#ff4d00",
"#ff0000",
]



function setup() {
  createCanvas(800, 1000);

 rectMode(CENTER)
 n = 50;
  
  
}

function draw() {
  // noLoop()
  if (circles.length < n) {
    circles.push(new Circ());  
  }


  background(0);
  for (var i=0; i<circles.length; i++) {
    circles[i].draw();
  }
 

}

function distBetweenCircles(circle1, circle2) {
  
  return (dist(circle1.x, circle1.y, circle2.x, circle2.y) - 0.5*(circle1.r + circle2.r));
  
}
  
function Circ(x_, y_, r_) {
  
  if (x_===undefined) {
    do {
      done = true;
      this.x = random(width);
      this.y = random(height);
      this.r = 1;
      
      minDist = width;
      for (var i=0; i<circles.length; i++) {
        var dOther = distBetweenCircles(this, circles[i]);
        if (dOther < 0) done = false;
        else {
          if (dOther < minDist) minDist = dOther;
        }
      }
    } while(!done);
    this.r -= minDist; // -= makes the circles "fall in" on themselves
  }
  else {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }

  this.draw = function() {
    let t = frameCount/FPS //control how fast the vinyl starts spinning out of control
    push();
    // translate(width/2, height/2); //start each circle in the middle instead of randomly like with reg circle packing
    noFill();
    strokeWeight(1)
    stroke(50,100,150);
    // rotate(PI/4)
    for(let i = 0; i < width; i+=30){
      for(let j = 0; j<height; j +=30){
        let chooseColor = random()
        if(chooseColor > 0.8){
          fill(colorArray[0])
        }else if(chooseColor > 0.6 && chooseColor < 0.8){
          fill(colorArray[1])
        }
        else if(chooseColor > 0.4 && chooseColor < 0.6){
          fill(colorArray[2])
        }
        else if(chooseColor > 0.2 && chooseColor < 0.4){
          fill(colorArray[3])
        }
        else {
          fill(colorArray[4])
        }
        rect(i,j,10,100)
        // rect(-i, -j, 100,10)
      }

    }
   

    pop();
     push()
    noFill()
            translate(width/2, height/2); //start each circle in the middle instead of randomly like with reg circle packing

    rotate(PI/4)

    stroke(255,255,0)
    strokeWeight(5)
    rect(0, 0, this.r/2, this.r/2); //random adds the spinning effect 
    pop();
  }
}