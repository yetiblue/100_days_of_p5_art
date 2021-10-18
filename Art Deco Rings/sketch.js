let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(2200, 1200);
  
  x = width / 2;
  y = width / 2;
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  background(32);
}

function draw() {

  //Section below was originally for walking a single dot one pixel at a time to cover the canvas

  // var randomValue = random();
  // console.log(randomValue)
//   if(randomValue < 0.25){
//     x--;
//   }
//   else if(randomValue < 0.5){
//     x++;
//   }
//   else if(randomValue < 0.75){
//     y--;
//   }
//   else{
//     y++;
//   }
  
  // wrap around left and right sides
  if(x < 0){
    x = width;
  }
  else if(x > width){
    x = 0;
  }
  
  // wrap around top and bottom sides
  if(y < 0){
    y = height;
  }
  else if(y > height){
    y = 0;
  }
  
  // randomly change color
  r += random(-10, 10);
  g += random(-10, 10);
  b += random(-10, 10);
  
  // don't let values go outside 0-255 range
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  strokeWeight(random(50))
  stroke(r, g, b);
  
  // point(x, y);
  for(i =0; i<5; i++){
    noFill();
      square(x-random(-2200,2200),y+random(-1200,1200),100,100)


  }

}