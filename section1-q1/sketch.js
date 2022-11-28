
function setup() {
  createCanvas(200, 200);
background (200)
line (100,25,20)

function line (cx,cy,r)
  beginShape();
  for(let i = 0; i<5; i ++) {
  const theta = TWO_PI * i * 2 /5 - HALFPI;
  const x = cx + cos(theta) * r;
  const y = cy + sin(theta) * r;
  vertex (x,y);
  }
  endshape (CLOSE)
   

}
