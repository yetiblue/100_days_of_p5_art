function setup() {
  w = min(800,800)
  wx = w*1
  wy = w*1
  createCanvas(wx, wy);

  padding = 30
  spacing = 10

  bools = [] //1 array for every x-axis point, each of these arrays contains the full array of y-axis 0's
  for(x = padding; x<wx-padding; x+=spacing){
    row = []
    for(y = padding; y<wy-padding; y+=spacing){
     
     row.push(0)
    }
    rez = -0.04
    randomRowIndex = int(noise(x*2*rez,y*2*rez)*row.length);
    row[randomRowIndex] = 1
    bools.push(row)
    // console.log(bools)
  }
  
}

function draw(){
  // let pointArray = [];
  background(220)
  for(i = 0; i<bools.length; i++){
    for(j = 0; j<bools[0].length; j++){ //bool[any-value-between-0-and-number-of-columns]
      if(bools[i][j]){ //if nested value is 1
        strokeWeight(5)
        // pointArray.push({x: i*spacing + padding, y: j*spacing + padding})
        if(i>0){
          // line(pointArray[i].x, pointArray[i].y, pointArray[randomPoint].x, pointArray[randomPoint].y)
          push();
          if(i < 20){
            stroke(255,20,100)
          }else if (i > 20 && i < 40){
          stroke(0,100,255)}
          else {stroke(0,255, 100)}
          line((i-1) * spacing + padding,
               j * spacing + padding,
              i * spacing + padding,
               j * spacing + padding)

          line((i-1) * spacing + padding,
               j * spacing + padding,
              prevI * spacing + padding,
               prevJ * spacing + padding)
           line((i-1) * 2* spacing + padding,
               j * 2* spacing + padding,
              i * 2* spacing + padding,
               j * 2* spacing + padding)

          line((i-1) * 2* spacing + padding,
               j * 2 * spacing + padding,
              prevI * 2 * spacing + padding,
               prevJ * 2 * spacing + padding)
          pop();
          // pointArray[1].x += random(-100, 100);
          // pointArray[1].y += random(-100, 100);
          // ellipse( pointArray[1].x, pointArray[1].y, spacing/2)
        }
        prevI = i
        prevJ = j
        ellipse(i * spacing + padding, j * spacing + padding,spacing/2);
         ellipse(i * 2* spacing + padding, j * 2* spacing + padding,spacing/2);
       
        
      
        
      }
      point(i * spacing + padding, j * spacing + padding)
    }
  }
}