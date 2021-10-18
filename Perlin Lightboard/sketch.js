function setup() {
  createCanvas(801, 801);
  t = rez = c = n = 0.02;
  strokeWeight(2);
  xOff = 50
  yOff = 50
}

function draw() {
  background(2, 98, 121);
  //noStroke();
  stroke(246, 214, 187)
  for (i = yOff; i < height - yOff; i += 20) {
    for (j = xOff; j < width - xOff; j += 20) {
      
      n = noise(i * rez +t, j * rez);
      if(n > 0.5 && n <0.65){
        push();
          drawingContext.setLineDash([n*5,n*10])
        stroke(255,218,0)
        strokeWeight(4)
        line(i,j,i+10,j+10)
        pop();
      }else if (n > 0.65){
        push();
        stroke(230, 64, 144)
        strokeWeight(5)
        line(i,j,i+30,j)
        pop();

      }else{
        line(i+n*10,j,i,j+n*10)
      }
    }
  }
  t += 0.01;
}