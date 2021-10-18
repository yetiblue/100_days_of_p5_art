// This sketch explores the use of pixel sorting in generative art
// It was built to accompany a short tutorial article found at
// bit.ly/P5jsSandscape
// Program licensed under CC BY-SA 3.0

//"Burano island - Venice - April 2019" by Dis da fi we is licensed under CC BY-NC-SA 2.0 

// variable for holding images
let panel;

// variables for setting panel display properties
const sc = 2; // screen scaling factor
const panelW = 200;
const panelH = 100;
const frameW = 20;

// sort styles
let hSortStyle = 1; // choose a value 0-5
let vSortStyle = 11; // choose a value 6-11

function preload() {
  panel = loadImage("images/khaby.jpg");
}

function setup() {
  createCanvas(sc * (panel.width + 2 * frameW), sc * (panel.height + 2 * frameW));

  pixelDensity(1); // pixel density is set to 1 to reduce computation
}

function draw() {

  // factor is used to create create bias towards the horizontal or 
  // vertical sorting algorithm. Scale sets how far the bias can drift
  // and frequency sets how quickly the bias will change

  const biasScale = 0.9; // maximum value 1
  const biasFreq = 0.005;
  let biasValue = 0.5 + biasScale * (noise(0.005 * frameCount) - 0.5);


  panel.loadPixels();
  for (let i = 0; i < panel.width - 1; i++) {
    for (let j = 0; j < panel.height - 1; j++) {

      // for each pixel, the choose to sort using the vertical 
      // or the horizontal algorithm
      if (random(1) < biasValue) {
        sandSwap(hSortStyle, i, j);
      } else {
        sandSwap(vSortStyle, i, j);
      }

    }
  }
  panel.updatePixels();

  background(0);
  image(panel, sc * frameW, sc * frameW, sc * panel.width, sc * panel.height);

}

// fast pixel get function requires pixels loadPixels()
// returns an array for the color of the pixel as [r,g,b]

function fGetPanelPixel(x, y) {
  const index = 4 * (y * panel.width + x);
  return [panel.pixels[index], panel.pixels[index + 1], panel.pixels[index + 2]];

}

// fast pixel set function requires loadPixels()
// this function assumes that the pixelDensity is 1. For a method  
// using pixel densities, https://p5js.org/reference/#/p5/pixels

function fSetPanelPixel(x, y, c) {
  const index = 4 * (y * panel.width + x);
  panel.pixels[index] = c[0];
  panel.pixels[index + 1] = c[1];
  panel.pixels[index + 2] = c[2];
}

// swap the color values of pixel in (a,b) with (c,d) 
function swapPanelPixels(a, b, c, d) {
  const hold = fGetPanelPixel(a, b);
  fSetPanelPixel(a, b, fGetPanelPixel(c, d));
  fSetPanelPixel(c, d, hold);
}


function sandSwap(style, x, y) {
  let pix, comp;
  pix = fGetPanelPixel(x, y);
  switch (style) {

    // HORIZONTAL CASES

    case 0: // sort left on hue property
      comp = fGetPanelPixel(x + 1, y);
      if (hue(pix) < hue(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;
    case 1: // sort right on hue property
      comp = fGetPanelPixel(x + 1, y);
      if (hue(pix) > hue(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;

    case 2: // sort left on brightness property
      comp = fGetPanelPixel(x + 1, y);
      if (brightness(pix) < brightness(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;
    case 3: // sort right on brightness property
      comp = fGetPanelPixel(x + 1, y);
      if (brightness(pix) > brightness(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;

    case 4: // sort left on saturation property
      comp = fGetPanelPixel(x + 1, y);
      if (saturation(pix) < saturation(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;
    case 5: // sort right on saturation property
      comp = fGetPanelPixel(x + 1, y);
      if (saturation(pix) > saturation(comp)) {
        swapPanelPixels(x, y, x + 1, y);
      }
      break;

      // VERTICAL CASES

    case 6: // sort up on hue property
      comp = fGetPanelPixel(x, y + 1);
      if (hue(pix) < hue(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;
    case 7: // sort down on hue property
      comp = fGetPanelPixel(x, y + 1);
      if (hue(pix) > hue(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;

    case 8: // sort up on brightness property
      comp = fGetPanelPixel(x, y + 1);
      if (brightness(pix) < brightness(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;
    case 9: // sort down on brightness property
      comp = fGetPanelPixel(x, y + 1);
      if (brightness(pix) > brightness(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;

    case 10: // sort up on saturation property
      comp = fGetPanelPixel(x, y + 1);
      if (saturation(pix) < saturation(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;
    case 11: // sort down on saturation property
      comp = fGetPanelPixel(x, y + 1);
      if (saturation(pix) > saturation(comp)) {
        swapPanelPixels(x, y, x, y + 1);
      }
      break;
  }
}