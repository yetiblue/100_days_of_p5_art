let circles = 2000;
let goldenRatio = (Math.sqrt(5) + 2) / 2 + 3;
//56493


function setup() {
  frameRate(60);
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noCursor();
}

function draw() {
      	background(0);
  for(let stars = 0; stars < 1000; stars ++){
    fill(220)
    ellipse(random(width), random(height), 3)
  }
    // noLoop();
  // for(let i = 0; i < 3; i ++){
    let spiralValue = random(7000, 9929299)
    push();
  fill(255,0,0)
      drawSpiral(500,500, spiralValue);

  pop();
    push();
fill(220)   
  stroke(220)
        drawSpiral(502,502, spiralValue);
    pop();

  }
// }

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function drawSpiral(spiralX, spiralY, spiralShape){
  
    let goldenAngle = goldenRatio * (spiralShape + Math.PI);

    let pos = createVector(spiralX, spiralY);
  console.log(pos)
	let circle_rad = (windowWidth * random(0.005, 0.1));
	let spiral = createVector(map(mouseX, 0, width, 0.006, 0.02), map(mouseY, 0, height, 0.003, 0.005));

	for (let i = 0; i <= circles; ++i) {
          let FPS = 40;

        let t = frameCount/FPS //framecount is P5 keeping track of how many frames have passed since sketch started
      
		let r = spiral.x * 1.5 *i;
		let ratio = i / circles;
       // TAU/numDivs * n + t/(sizes[n]/2)
		let angle = i * goldenAngle * t;
		let spiral_rad = ratio * 3 * circle_rad;
		let x = pos.x + sin(angle) * 1.5*spiral_rad ;
      //tan(angle)/5
		let y = pos.y + cos(angle) * 1.5*spiral_rad;
        let colorPicker = random()
//         if (colorPicker > 0.8){
//           // fill(255,200,0)
//           fill(255,20,200)
//         }else if (colorPicker > 0.5 && colorPicker < 0.8){
//           fill(0,255,200)
//         }else{
//           fill(200,0,255)
//                     fill(0,0,255,150)

//         }
        // fill(220,220,220, random(200))
		// fill(random(r * 100), 100, random(200));
		noStroke();
		ellipse(x, y, r);
       
	}
    
}