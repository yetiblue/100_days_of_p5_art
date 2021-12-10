palette = [
  "#f2eb8a",
  "#fed000",
  "#fc8405",
  "#ed361a",
  "#e2f0f3",
  "#b3dce0",
  "#4464a1",
  "#203051",
  "#ffc5c7",
  "#f398c3",
  "#cf3895",
  "#6d358a",
  "#06b4b0",
  "#4b8a5f",
];

//palette = ['#1f306e', '#553772', '#8f3b76', '#c7417b', '#f5487f',
  //         '#454d66', '#309975', '#58b368', '#dad873', '#efeeb4']

function setup() {
  w = min(windowWidth, windowHeight);
  wx = w * 1.6;
  wy = w * 0.9;

  spc = 50;
  size = spc / 1.1;
  off = 10;

  numX = int((wx - off * 2) / spc);
  numY = int((wy - off * 2) / spc);

  spcX = (wx - off * 2) / numX;
  spcY = (wy - off * 2) / numY;

  createCanvas(wx,wy);

  rectMode(CENTER);

  strokeWeight(1);
  stroke(0);
  noStroke()
}

function draw() {
  background(
   random(palette)
  );

  for (x = off; x < wx - off; x += 2 * spcX) {
    for (y = off; y < wy - off; y += 2 * spcY) {
      fill(random(palette));
      rect(x + spcX / 2, y + spcY / 2, 2 * size, 2 * size);

      orient = [];

        randNum = random([3, 4, 6, 8]);
        randNum = 10
        for (n = 0; n < randNum; n++) {
          fill(random(palette));
          push();
          stroke(0);
          ellipse(x + spcX/1.5, y, 10, 8)
          ellipse(x + 5, y + spcY/4, 10, 8)
          pop();
          beginShape();
          vertex(x + spcX / 2 + size/1.5,
                 y + spcY / 2 - size / 2);
          vertex(
            x + spcX / 2.5 + size / 2 - (size / randNum) * randNum,
            y + spcY - size / 2 
          );
          vertex(
            x + spcX - size / 2,
            y + spcY / 2 + size / 2 - (size / randNum) * n
          );
          endShape();
          
          // beginShape();
          // vertex(x + spcX / 2 - size / 2,
          //        y + spcY / 2 + size / 2);
          // vertex(
          //   x + spcX / 2 + size / 2,
          //   y + spcY / 2 + size / 2 
          // );
          // vertex(
          //   x + spcX / 2 + size / 2,
          //   y + spcY / 2 - size / 2 + (size / randNum) * n
          // );
          // endShape();
        

      }
    }
  }

  noLoop();
}
