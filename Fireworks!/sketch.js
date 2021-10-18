function setup() {
  createCanvas(800, 1200);
  let c = 0;
  t = rez = n = 0.01; //resolution: bigger value = more zoomed out 
  //c = color 
  // strokeWeight(10);
  cols1 = [
   "#FF10F0",
    "#f3722c",
    "#f8961e",
    "#f9844a",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#4d908e",
    "#577590",
    "#277da1",
  ];
  cols2 = [
  "#E1F5C4",  " #EDE574",   "#F9D423",   "#FC913A",   "#FF4E50",  "#E1F5C4",  " #EDE574",   "#F9D423",   "#FC913A",   "#FF4E50"
  ];
  cols = [ "#F8B195",   "#F67280",   "#C06C84",   "#6C5B7B",   "#355C7D","#F8B195",   "#F67280",   "#C06C84",   "#6C5B7B",   "#355C7D", ]
}
function draw() {
  background(0);
  noStroke();
  for (i = 0; i < width; i += 25) {
    for (j = 0; j < height; j += 25) {
      //noise x = straight lines, x,y = blur, x,y,z = terrain map. 
      // the 't' allows for the design to move up on the y-axis 
      n = noise(i * rez, j *rez, j*rez) * 10;
      
    
      n > 9
        ? (c = 9)
        : n > 8
        ? (c = 8)
        : n > 7
        ? (c = 7)
        : n > 6
        ? (c = 6)
        : n > 5
        ? (c = 5)
        : n > 4
        ? (c = 4)
        : n > 3
        ? (c = 3)
        : n > 2
        ? (c = 2)
        : n > 1
        ? (c = 1)
        : (c = 0);
   
      fill(cols[c]);
            // ellipse(i,j,5,5)

      // ellipse(i, j, 10); //each pixel of the noise
      strokeWeight(random(0,10))
      stroke(cols[c])
      line(mouseX, mouseY, random(n,1200), random(n,1200))
     
           
      //Day 18
       stroke(cols2[c])
             line(800-mouseX, 1200-mouseY, random(n,1200), random(n,1200))
       // stroke(cols2[c])
       //       line((800-mouseX)/2, (1200-mouseY)/2, random(n,1200), random(n,1200))
      
      //Day 19
       // line(mouseX, random(n,1200), j, mouseY)
       //      line(800-mouseX, random(n,1200), j, 1200-mouseY)
      //Day 20 stars and lines
       // line(i, random(n,1200), j, random(n,1200))
      // ellipse(i,j,5,5)

    }
    
    
  }
  t += 0.01;
}
