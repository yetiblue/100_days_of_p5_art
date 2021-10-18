let r = 200;
let g = 100;
let b = 218;
function setup() {
  createCanvas(800, 1200);
 
}

function draw() {
  background(220);
  for (let i = 0; i < 1000; i++) {
  let r = random(-500, 500);
    push();
    strokeWeight(5)
  stroke(random(r,255),random(g,255), random(b,255))
  line(i, 500 - r, i, 500 + r);
  pop();
}
}
function keyPressed(){
if(keyCode === LEFT_ARROW){
  save('myCanvas.jpg')
  console.log("save")
}else if (keyCode ===RIGHT_ARROW){
  r = random(10,200)
  g = random(10,150)
  b = random(15,200)
 
}}