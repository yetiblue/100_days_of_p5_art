let changeColor = false;
function spawnWalker(x, y) {
  this.currX = x;
  this.currY = y;

  this.spacing = spacing;
  this.offset = offset;

  this.path = []; // this will help remember the path
  this.drawnPath = [];

  this.advance = function (grid) {

    // move and update position
    opts = this.getOptions(grid);
    choice = random(opts);

    if(choice){
      changeColor = false;
      // add current position to the path array
      this.path.push({ dx: this.currX, dy: this.currY });
      this.drawnPath.push({ dx: this.currX, dy: this.currY });

      this.currX = choice.dx;
      this.currY = choice.dy;

      return {dx: this.currX, dy: this.currY}
    }else{
      changeColor = true;
      backtracked = this.path.pop()

      this.currX = backtracked.dx
      this.currY = backtracked.dy
    }
  };

  this.getOptions = function (grid) {

    options = [];
    if (this.currX > 0) {
      if (grid[this.currX - 1][this.currY]) {
        options.push({ dx: this.currX - 1, dy: this.currY });
      }
    }

    if (this.currY > 0) {
      if (grid[this.currX][this.currY - 1]) {
        options.push({ dx: this.currX, dy: this.currY - 1 });
      }
    }

    if (this.currX < grid.length - 1) {
      if (grid[this.currX + 1][this.currY]) {
        options.push({ dx: this.currX + 1, dy: this.currY });
      }
    }

    if (this.currY < grid[0].length - 1) {
      if (grid[this.currX][this.currY + 1]) {
        options.push({ dx: this.currX, dy: this.currY + 1 });
      }
    }

    return options;
  };
  this.display = function (g) {
    for (let n = 0; n < this.drawnPath.length - 1; n++) {
      if(dist(this.drawnPath[n].dx * this.spacing + this.offset,
      this.drawnPath[n].dy * this.spacing + this.offset,
      this.drawnPath[n + 1].dx * this.spacing + this.offset,
      this.drawnPath[n + 1].dy * this.spacing + this.offset)<this.spacing+0.1){
       
        strokeWeight(5)
        if(n % 10 == 0 ){
        let colorPicker = random();
        if(colorPicker < 0.99 && colorPicker > 0.8){
          stroke(101, 193, 199)
        } else if(colorPicker < 0.79 && colorPicker > 0.6){
          stroke(70, 164, 181)
        } else if(colorPicker < 0.59 && colorPicker > 0.4){
          stroke(21, 127, 172)
        }
        else if(colorPicker < 0.39 && colorPicker > 0.2){
          stroke(11, 43, 97)
        }
         else{
          stroke(247, 135, 137)
        }
        }
    line(
      this.drawnPath[n].dx * this.spacing + this.offset,
      this.drawnPath[n].dy * this.spacing + this.offset,
      this.drawnPath[n + 1].dx * this.spacing + this.offset,
      this.drawnPath[n + 1].dy * this.spacing + this.offset
    );
}
    }
  };
}

function makeGrid(w, h, spacing, offset) {
  this.w = w;
  this.h = h;
  this.spacing = spacing;
  this.offset = offset;
  this.grid = [];

  this.initGrid = function () {
    for (let x = this.offset; x < this.w - this.offset; x += this.spacing) {
      row = [];
      for (let y = this.offset; y < this.h - this.offset; y += this.spacing) {
        row.push(1);
      }
      this.grid.push(row);
    }
  };

  this.display = function () {
    strokeWeight(2);
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[0].length; j++) {
        if (this.grid[i][j]) {
          point(i * this.spacing + this.offset, j * this.spacing + this.offset);
        }
      }
    }
  };
}

function gridHandler(grid, randomWalkers){
  this.grid = grid // the grid
  this.randomWalkers = [...randomWalkers]  // an array of random walkers

  // go through and set their starting positions in the grid to false
  for(let n = 0; n<this.randomWalkers.length; n++){
      this.grid.grid[randomWalkers[n].currX][randomWalkers[n].currY] = 0
  }

  // advance entire board state
  // checks off cells that have paths in them
  this.advanceGrid = function(){

    // go through all the random walkers and advance each one individually
    for(let n = 0; n<this.randomWalkers.length; n++){
      toCheck = this.randomWalkers[n].advance(this.grid.grid)

      if(toCheck){
        this.grid.grid[toCheck.dx][toCheck.dy] = 0
      }
    }
  }

  this.display = function(){
    this.grid.display()
    for(let n = 0; n<this.randomWalkers.length; n++){
      this.randomWalkers[n].display()
    }
  }
}

function setup() {
  w = min(windowWidth, windowHeight);
  wx = w;
  wy = w;
  createCanvas(wx, wy);

  spacing = 10
  offset = 80

  g = new makeGrid(wx, wy, spacing, offset);
  g.initGrid();

  r = new spawnWalker(0,0, spacing, offset)
  r2 = new spawnWalker(80,10, spacing, offset)

  h = new gridHandler(g, [r,r2])
}

function draw() {
  background(20);
  stroke(0);
  h.display()
  h.advanceGrid()
}