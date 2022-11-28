

function setup() {
  createCanvas(300,300);
}

function draw() {
  let p = color (255,255,255)
  let c = color (0,255,100)
  let b = color (0,100,255)
  
  background (p)

  fill(c);

  triangle(12,120,116,120,116,10);

  fill(b);

  triangle(0,108,106,108,106,0);
  
  var myDiv = createDiv ('TicoTico')
  var myDiv1 = createDiv ('Does Some Code')

  myDiv.child(myDiv1)
  myDiv.position (60,100)

  myDiv.style ('Text Aligned', 'Bottom')
  
};
