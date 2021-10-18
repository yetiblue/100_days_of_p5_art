function setup(){
  createCanvas(800, 800);
  numDivs = 200;
  radius = 300;

  sizes = []
  for(a = 0; a<TAU; a+=TAU/numDivs){
    sizes.push(random(0.5,12))
  }
  FPS = 50;
  frameRate(FPS);
}
function draw(){
  background(220,50);
  translate(width/2, height/2) //starts the circle in the center of the canvas
  
  let t = frameCount/FPS //framecount is P5 keeping track of how many frames have passed since sketch started
  
  for(n=0;n<numDivs; n++){
    a = TAU/numDivs * n + t/2
    randomRadius = random(-0.4,0.4)
    radius -= randomRadius;
    x = radius*cos(a);
    y = radius*sin(a);
    
    strokeWeight(sizes[n]);
    point(x  ,y + random(0,50))
  }
}