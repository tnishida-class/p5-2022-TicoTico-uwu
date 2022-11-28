// Modify the function that draws stars to create a function that draws a regular N sided polygon
function setup(){
  createCanvas(300, 100);
  
  //Color Code
  background(200);
  fill(0);

  //Start Positions
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  regularPolygon(250, 50, 40);
}


//Crossmark Shape Function
function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}


//NGmark Shape Function
function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}


//Polygon Shape Function
function regularPolygon(cx, cy, r){

  beginShape();

   // Set up random number generator
  n = random (3,10);

 // Set I boundary to be the random number generated, and divide the shape function by the same constant
  for(var i = 0; i < n; i++){
    let theta = PI * i * 2 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
};
