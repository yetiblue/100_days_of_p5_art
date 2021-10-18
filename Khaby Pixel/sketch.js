let img;

function preload() {
  // img = loadImage("https://happycoding.io/images/stanley-1.jpg");
    img = loadImage("images/khaby.jpg");

}

function setup() {
  createCanvas(1000, 1000);

  img.loadPixels();
  // Loop over every pixel in the image
  console.log(img.height)
//   for (let y = 0; y < img.height; y++) {
//     for (let x = 0; x < img.width; x++) {
//       // Read the pixel's color
//       let originalColor = img.get(x, y);

//       // Inverse the color
//       const r = 255 - red(originalColor);
//       const g = 255 - green(originalColor);
//       const b = 255 - blue(originalColor);
//       // console.log(r,g,b)
//       let outputColor = color(r,random(255),b);
    
//       // Set the pixel's color
//       img.set(x, y,outputColor);
//     }
//   }
//   img.updatePixels();
}

function draw() {
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      // Read the pixel's color
      let originalColor = img.get(x, y);

      // Inverse the color
      // originalColor +=20
      const r = random(255) - red(originalColor);
      const g = random(255) - green(originalColor);
      const b = 255 - blue(originalColor);
      let outputColor = color(r,g,b + random(30));
      console.log(r,g,b)

    
      // Set the pixel's color
      img.set(x, y,outputColor);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
