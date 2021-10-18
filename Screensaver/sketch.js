
//DISCLAIMER: I have no idea how I got the colors working, didn't quite have time to figure it out properly. But hey, they turned out pretty nicely in the end. Just can't figure out how to get the light colors to switch back to the original teal and pink when the rectangle goes beyond the Y-axis boundary again. 
let x = 10;
let y = 100;
let r = 0;
let g = 0;
let b = 0;

var xupdate = 2;
var yupdate = 1;

function setup() { 
   createCanvas(800, 1200);
}

function draw() {

   // background(200);
  push();
    stroke(r + 22,g + 210,b + 187)
    rect(x, y, 100, 100);
  pop();
  push();
    stroke(r + 252, r + 15, r + 192)
    rect(x + 400, y, 100,100)
  pop();
    x += xupdate;
		y += yupdate;

    if (x > width || x <= 0 || x > width/2) {
      xupdate *= -1;
      stroke(r + 218, g + 255, b + 0)
    }
	
		if (y > height || y <= 0) {
			yupdate *= -1;

          b = 252;
          g = 15;
          r = 192;
		}

}
