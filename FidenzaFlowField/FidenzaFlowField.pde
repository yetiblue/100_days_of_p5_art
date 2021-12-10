final ArrayList<ArrayList<GridAngle>> grid = new ArrayList<ArrayList<GridAngle>>();
import processing.svg.*;

final int xOff = 100;
final int yOff = 100;
final int spacing = 50;
final float rez = 0.001;
final int numLines = 80;
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
    //strokeWeight(300.5);
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
  float lineLength = random(600,800);
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
    //strokeWeight(random(20,30));
    float strokeColor = random(1);
   if (strokeColor > 0.8) {
     stroke(255, 220, 74);
   } else if (strokeColor < 0.8 && strokeColor > 0.6) {
      stroke(250, 155, 199);
}  else if (strokeColor < 0.6 && strokeColor > 0.4) {
      stroke(234, 234, 232);
}  else if (strokeColor < 0.4 && strokeColor > 0.2) {
      stroke(197, 168, 252);
}  else  {
      stroke(163, 225, 212);
} 

    
    curveVertex(vec.x, vec.y);
    curveVertex(vec.x + 50, vec.y + 50);
//    float strokewidth = random(1);
//   if (strokewidth > 0.8) {
// curveVertex(vec.x + 50, vec.y + 50);  
// }
// else if (strokewidth < 0.8 && strokewidth > 0.6) {
//      curveVertex(vec.x + 50, vec.y + 50); 
//}  else if (strokewidth < 0.6 && strokewidth > 0.4) {
//        curveVertex(vec.x + 30, vec.y + 30); 
//}  else if (strokewidth < 0.4 && strokewidth > 0.2) {
//      curveVertex(vec.x + 20, vec.y + 20); 
//}  else  {
//      curveVertex(vec.x + 10, vec.y + 10); 
//} 
     



  }
  endShape();
}


void createGrid() {
  for (int x = 2 *xOff; x<width-xOff; x+=spacing) {
    ArrayList<GridAngle> row  = new ArrayList<GridAngle>();
    for (int y = yOff; y<width-yOff; y+= 1.1*spacing) {
      float angle = map(noise(x*rez, y*rez), 0.0, 1.0, 0.0, 2*PI);

      row.add(new GridAngle(x, y, spacing/2, angle));
    }
    grid.add(row);
  }
}

void setup(){
  size(1200,800);
  noFill();
  createGrid();
      //beginRecord(SVG, "drippy6.svg");

}

void draw() {
  background(255,239,213);
  for (int x = 0; x<grid.size(); x++) {
    for (int y = 0; y<grid.get(0).size(); y++) {
      grid.get(x).get(y).display();
    }
  }
  
  for (int n = 0; n < numLines; n++) { // no protect
    drawFlowLine();
  }

  noLoop();
      //endRecord();

}
