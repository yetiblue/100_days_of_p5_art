let randomX;
let randomY;
function setup() {
  createCanvas(800, 1200);
}

function draw() {
  angleMode(DEGREES)
  background(22);
  stroke(220)
  strokeWeight(6)
  noFill();
  noLoop();
  for(let i = 0; i < 20; i++){
    randomX = random(100,700);
    randomY = random(100,1100)
    push();
    let radius = 30;
      push();
      let value = random();
      if(value > 0.7){
        stroke(255,20,147)
        strokeWeight(20)
        radius = 50
        randomX = randomX + 20
      } else if(value > 0.5 && value < 0.7){
        line(randomX, randomY, randomX, randomY + 50)
        line(randomX - 30, randomY + 50, randomX + 30, randomY + 50)
      }
        else if(value >0.3 && value < 0.5){
          line(randomX + 50, randomY - 30, randomX + 50, randomY + 30)
        }
      
      ellipse(randomX, randomY, radius)
    pop();
      line(randomX + 15, randomY, randomX + 50, randomY)
      line(randomX + 50, randomY - 30, randomX + 50, randomY + 30)
    pop();
    
  }
  for(let j = 0; j < 10; j++){
     randomX = random(100,700);
    randomY = random(100,1100)
    push();
      strokeWeight(15)
      stroke(255,20,147)
      triangle(randomX +60 , randomY + 60, randomX + 90, randomY, randomX + 120, randomY + 60)
    pop();
  }
   for(let k = 0; k < 4; k++){
    randomX = random(100,700);
    randomY = random(100,1100)
    push();
     push();
      strokeWeight(15)
      stroke(255,20,147)
      rect(randomX, randomY, 50)
     pop();
     strokeWeight(8)
     line(randomX + 50, randomY - 20, randomX + 50, randomY - 70)
     line(randomX - 30, randomY, randomX - 30, randomY + 75)
    pop();
  }
   for(let l = 0; l < 3; l++){
    randomX = random(100,700);
    randomY = random(100,1100)
    push();
     
     strokeWeight(8)
     line(randomX + 10, randomY, randomX + 40, randomY)
     line(randomX + 40, randomY, randomX, randomY + 70)
     line(randomX + 20, randomY + 40, randomX + 60, randomY + 40)
     line(randomX + 60, randomY, randomX + 60, randomY + 70)
    pop()
  }
  
  
}



// class shape1 {
//   constructor(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
//   }
// }
// let square = new Rectangle('square', 1, 1); // 