final ArrayList<ArrayList<GridAngle>> grid = new ArrayList<ArrayList<GridAngle>>();

final int xOff = 50;
final int yOff = 150;
final int spacing = 10;
final float rez = 0.001;
final int numLines = 7000;
final int width = 800;
final int height = 1000;
final float segmentLength = 2;

class GridAngle {
  int x, y, r;
  float angle;

  PVector v;

  GridAngle(int x_, int y_, int r_, float angle_) {
    x = x_;
    y = y_;

    angle = angle_;
    r = 1;
    v = new PVector(x + r * cos(angle),
                    y + r * sin(angle));
  }

  void display() {
    strokeWeight(0.8);
    //line(x, y, v.x, v.y);
  }
}


void drawFlowLine() {
  GridAngle fa = grid.get((int)random(grid.size())).get((int)random(grid.size()));
  
  beginShape();
  //PVector vec = new PVector(fa.x + 1 *cos(fa.angle), 
  //  fa.y + 1 * sin(fa.angle));

  PVector vec = fa.v;

  curveVertex(vec.x, vec.y);

  float minDist = 999.99;
  float distance = 0.0;
  int nearestX = 0;
  int nearestY = 0;
  GridAngle tempFA;
  float lineLength = random(10,50);
  for (int n = 0; n<lineLength; n++) {
    for (int x = 0; x<grid.size(); x++) {
      for (int y = 0; y<grid.get(0).size(); y++) {
        tempFA = grid.get(x).get(y);
        distance = (float)dist(vec.x, vec.y, tempFA.x, tempFA.y);

        if (distance<minDist) {
          minDist = distance;
          nearestX = x;
          nearestY = y;
        }
      }
    }

    minDist = 999.99;
    float angle = grid.get(nearestX).get(nearestY).angle;

    vec = new PVector(vec.x + segmentLength*cos(angle),
                      vec.y + segmentLength*sin(angle));
    //strokeWeight(random(2,10));
    strokeWeight(random(0.1,2));
    // stroke(random(150,224), 105, 255);
    //stroke(random(50), random(50), random(30));
    stroke(250,0,0);
    //stroke(0);
    curveVertex(vec.x, vec.y);

  }
  endShape();
}


void createGrid() {
  for (int x = xOff; x < width - xOff; x+=spacing) {
    ArrayList<GridAngle> row  = new ArrayList<GridAngle>();
    for (int y = yOff; y<height-yOff; y+=spacing) {
       float angle = map(noise(x*rez, y*rez), 0.0, 1.0, 0.0, TAU*10);

      if((x < 3.5*xOff) || (x > width - 4*xOff && x < width - xOff) || (y < height - yOff && y > height - 2.5 * yOff)||(y < 2 * yOff)){
      row.add(new GridAngle(x, y, spacing/2, angle));
      }else{
        row.add(new GridAngle(0,0,0, 0));
      };
    }
    grid.add(row);
  }
}

void setup(){
  size(800,1000);
  noFill();
  createGrid();
}

void draw() {
  //background(255,239,213);
  background(0);
  

  for (int x = 0; x<grid.size(); x++) {
    for (int y = 0; y<grid.get(0).size(); y++) {
      grid.get(x).get(y).display();
    }
  }
  
  for (int n = 0; n < numLines; n++) { // no protect
    drawFlowLine();
  }
  push();
  strokeWeight(10);
  stroke(0);
  fill(220,0,0);
  ellipse(width/2, height/2, 300,300);
  fill(220,0,0);
  ellipse(width/2, height/2, 250,250);
  fill(0);
  ellipse(width/2, height/2, 75,75);
  pop();
  noLoop();
}
