
function setup() {
  createCanvas(800, 800);

}

function draw() {
  noLoop()
  	patternColors([color(0), color(140, 0, 240),color(200)]);

      	const t = width / 10;
  background(220,20);
 inc = 200
  for(let i = 0; i < width; i += inc ){
    for(let j =0; j < height; j +=inc){
      let patternPicker = random();
      if(patternPicker > 0.8){
         push()
        let rotatePercent = random()
        patternAngle(PI/3)
       // pattern(PTN.stripe(14));
                       pattern(PTN.stripePolygon(6, 20));

        // if(rotatePercent > 0.5){
        //   patternAngle(PI / 2);
        // }else {
        //   patternAngle(PI)
        // }
	rectPattern(i,j, inc,inc);
  pop()
        
      }
      else if(patternPicker > 0.6 && patternPicker < 0.8){
                patternAngle(PI/4)

       // pattern(PTN.stripe(16));
      pattern(PTN.stripePolygon(6, 20));
        rectPattern(i,j, inc,inc);
      }
       else if(patternPicker > 0.4 && patternPicker < 0.6){
                         patternAngle(PI/10)

       // pattern(PTN.stripe(10));
               pattern(PTN.stripePolygon(6, 20));

	rectPattern(i,j, inc,inc);
      }
       else if(patternPicker > 0.2 && patternPicker < 0.4){
                                  patternAngle(PI/1.5)

       // pattern(PTN.stripe(8));
        pattern(PTN.stripePolygon(6, 20));

	rectPattern(i,j, inc,inc);
      }
        else if(patternPicker > 0 && patternPicker < 0.2){
          	patternAngle(PI / 2);

       // pattern(PTN.stripe(8));
                         pattern(PTN.stripePolygon(6, 20));

	rectPattern(i,j, inc,inc);
      }
    }
  }
}