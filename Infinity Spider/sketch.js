function setup(){
  createCanvas(1000, 1000);
  numDivs = 200;
  radius = 300;

  sizes = []
  speed = []
  for(a = 0; a<TAU; a+=TAU/numDivs){
    speed.push(random())
    sizes.push(random(0.5,12))
  }
  FPS = 40;
  frameRate(FPS);
}
function draw(){
  // background(220,50);
  background(0,50)
  translate(width/2, height/2) //starts the circle in the center of the canvas
  
  let t = frameCount/FPS //framecount is P5 keeping track of how many frames have passed since sketch started
  
  for(n=0;n<numDivs; n++){
    a = TAU/numDivs * n + t/(sizes[n]/2)
    ratio = 8 //change number for different number of petals
    r = radius + speed[n]*20 + 50*tan(a*ratio) //tan causes spider legs
    x = r*cos(a);
    y = r*sin(a)*cos(a);
    x2 = radius*cos(a);
    y2 = radius*sin(a)*cos(a);
    x3 = radius*cos(a)*sin(a);
    y3 = radius*sin(a);
    
    strokeWeight(sizes[n]*1.25);
    // stroke(random(1800), 100,random(250),255) //colored
    stroke(255)

    point(x + (sizes[n] * 3),y + (sizes[n] * 3)) //spider legs
    point(x2 + (sizes[n] * 4),y2 + (sizes[n] * 4)) //horizontal infinity
    // point(x3 + (sizes[n] * 4),y3 + (sizes[n] * 4)) //vertical infinity


  }
}