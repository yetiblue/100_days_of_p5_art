function setup() {
  createCanvas(800, 1200);
  let c = 0;
  t = rez = n = 0.005; //resolution: bigger value = more zoomed out 
  //c = color 
  // strokeWeight(10);
  // cols = [
  //  "#FF10F0",
  //   "#f3722c",
  //   "#f8961e",
  //   "#f9844a",
  //   "#f9c74f",
  //   "#90be6d",
  //   "#43aa8b",
  //   "#4d908e",
  //   "#577590",
  //   "#277da1",
  // ];
  cols = [
  "#E1F5C4",  " #EDE574",   "#F9D423",   "#FC913A",   "#FF4E50",  "#E1F5C4",  " #EDE574",   "#F9D423",   "#FC913A",   "#FF4E50"
  ];
}
function draw() {
  background(0);
  noStroke();
  for (i = 0; i < width; i += 3) {
    for (j = 0; j < height; j += 3) {
      //noise x = straight lines, x,y = blur, x,y,z = terrain map. 
      // the 't' allows for the design to move up on the y-axis 
      n = noise(i * rez, j *rez) * 10;
      
    
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
   
      stroke(cols[c]);
      rect(i, j, 10); //each pixel of the noise 
    }
  }
  t += 0.01;
}
