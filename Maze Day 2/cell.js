// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Videos
// https://youtu.be/HyK_Q5rrcr4
// https://youtu.be/D8UgRyRnvXU
// https://youtu.be/8Ju_uxJ9v44
// https://youtu.be/_p5IH0L63wo

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j) {
  let redStroke = [237, 41, 56]
  let yellowStroke = [252, 198, 2]
  let returnRed = false;
  let returnYellow = false;
  
  this.i = i;
  this.j = j;
  console.log(this.i,this.j)
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function() {
    var neighbors = [];

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      if((this.i > 15 && this.i < 20)||(this.i >5 && this.i < 10)){
      var r = floor(random(0, neighbors.length));
      returnRed = true;

      return neighbors[r];
      }else{
        let r = floor(random(1, neighbors.length -1))
        returnYellow = true;

        return neighbors[r];
        
      }
      
    } else {
      return undefined;
    }


  }
  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);

  }

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    strokeWeight(4)
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      // console.log(returnRed, returnYellow)
      noStroke();
     fill(252, 198, 2,180)
      rect(x, y, w, w);
    }
  }
}