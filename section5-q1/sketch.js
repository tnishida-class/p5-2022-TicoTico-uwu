// Callouts Exercise
// Specify the position, background color, and others are an argument
// Lets add a tail to the balloon

function setup(){
  createCanvas(200, 400);
  background(240);
  balloon(100, 125, 60,70);
  tail (100,160,100,380)

function balloon (bx1,by1,w,h) {

  //creating a random number generator that equals a different color
  let G = color(80,241,80)
  let B= color (80,80,241)
  let R = color (241,80,80)

  //choosing  a random color from the selection
  var colors = [G,B,R];
  var randomColor = colors[Math.floor(Math.random()*colors.length)]
  fill(randomColor);
  ellipse (bx1,by1,w,h)
}

function tail (x1,y1,x2,y2) {
  strokeWeight(1.2);

  line (x1,y1,x2,y2)
  
}

}




