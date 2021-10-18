let t = -0.1;
let c = 0;
let n;
function setup() {
  	createCanvas(800, 800);
	noStroke();
   cols = [
   "#FF10F0",
    "#f3722c",
    "#f9f300",
    "#f9844a",
    "#f9c74f",
    "#d40078",
    "#43aa8b",
    "#4d908e",
    "#2de2e6",
    "#9700cc",
  ];
}

function draw() {
	for (var x = 0; x < width; x+=15) {
		for (var y = 0; y < height; y+=15) {
            //for each grid block up and down, a random value is generated and the color       
            //applied  
			n = noise(t * x, t * y + t) * 15;
			
       
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
       fill(cols[c])
      // fill(random(255), random(255), random(255))
	   ellipse(x, y, 15);
       console.log(n)
		}		
  	}
  t += .1
}
function keyPressed(){
if(keyCode === LEFT_ARROW){
  save('myCanvas.jpg')
  console.log("save")
}
}

