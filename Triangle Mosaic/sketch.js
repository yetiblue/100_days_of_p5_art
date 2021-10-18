
const MAX_HEIGHT = 1200;
const MAX_WIDTH = 1200;
const xOFF = 50;
const DENSITY = 12; //sets of points up and down 
const GAP = MAX_HEIGHT / DENSITY; //length of bottom of triangle 
const RELOAD_TIMEOUT = 3000;
const STROKE_COLOR = "#00203F";
const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
// const MONOCHROME = new Array(10).fill(0).map((_, i) => [i*24, i*25, i*26]);

function setup(){
  createCanvas(MAX_WIDTH, MAX_HEIGHT);
  stroke(STROKE_COLOR);
  strokeWeight(3)
  noLoop();
}

function draw(){  
    const lines = [];
    let odd = false;
  background(255,218,185)
    for(let y = xOFF * 2; y <= MAX_HEIGHT - xOFF * 2; y += GAP) {
        odd = !odd;
        const trait = [];
        const oddFactor = odd ? GAP/2 : 0; //pushes the every other row over so it starts off upside down
      
        for(let x = xOFF; x <= MAX_HEIGHT - xOFF * 2; x += GAP) {
          trait.push({
            x: x + (Math.random()*.8 - 0.4) * GAP + oddFactor,
            y: y + (Math.random()*.8 - 0.4) * GAP
          });
                  // console.log(y,x + oddFactor)

          //  trait.push({
          //   x: x + oddFactor,
          //   y: y
          // });
        }
        lines.push(trait);
      }
    odd = true;
    console.log(lines.length)
    for(let y = 0; y < lines.length - 1; y++) {
        odd = !odd;
        const dotLine = [];
        for(let i = 0; i < lines[y].length; i++) {
          console.log(lines)
          dotLine.push(odd ? lines[y][i]   : lines[y+1][i]);
          dotLine.push(odd ? lines[y+1][i] : lines[y][i]); //if odd skip to the next line (right side) and take that first X point. It's pushed over bc of the Odd offset 
        }
        for(let i = 0; i < dotLine.length - 2; i++) {
          drawTriangle(dotLine[i], dotLine[i+1], dotLine[i+2]);
        }
      }
     
    
}


const drawTriangle = (pointA, pointB, pointC) => {
  let random_index = Math.floor(Math.random() * TONES_1.length);
  const [r, g, b] = TONES_1[random_index];
  fill(r, g, b);
  triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y)
}