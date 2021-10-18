let circleX = 0;
let circleY = 200;
let counter = 0;

function setup() {
  createCanvas(800, 1200);
}

function draw() {
  const ctx = drawingContext;
  // background(109, 31, 95);
  background(249, 101, 116);
 //for-loop for filled circle
  for (let x = 125; x < width; x += 275) {
    for (let y = 150; y < height; y += 275) {
      push();
      noStroke();

      const makeLinearGradient = (ctx, x1, y1, x2, y2, colorStops, colors) => {
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        colorStops.forEach((stop, i) => gradient.addColorStop(stop, colors[i]));
        ctx.fillStyle = gradient;
        return gradient;
      };
      makeLinearGradient(
        ctx,
        -105,
        150,
        150,
        0,
        [0, 1],
        ["rgb(250, 184, 62)", "rgb(22, 210, 187)"]
      );
      ellipse(x, y, 150, 150);
      counter++;
      pop();
    }
  }
//for-loop for covering circle
  for (let a = 125; a < width; a += 275) {
    for (let b = 125; b < height; b += 325) {
      noStroke();
      // fill(109, 31, 95);
      fill(249, 101, 116);

      ellipse(a, b, 150, 150);
      counter++;
    }
  }

  // }
}
