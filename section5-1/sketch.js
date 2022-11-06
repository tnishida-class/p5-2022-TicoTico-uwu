// Text Use Functions
// Draw EU Flags

function setup(){
  createCanvas(270, 200);
  let C = color (0,20,137);
  let C2 = color (255,221,0);
  background(C);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 135 + cos(theta) * 60;
    let y = 100 + sin(theta) * 60;
    star (x,y,10,10)
    function star(cx,cy,r){
      beginShape();
      noStroke();
      fill (C2);
      for (let i = 0; i <5; i++){
        const angle = TWO_PI * i * 2 / 5 - HALF_PI;
        const x1 = cx + cos (angle)* r;
        const y1 = cy + sin (angle) * r;
        vertex (x1,y1);
      }
      endShape (CLOSE);;
    }
  }
}

//Copy Star function from 5-2 and replace ellipse