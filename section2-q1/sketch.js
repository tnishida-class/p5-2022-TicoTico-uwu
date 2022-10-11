
function setup(){
  for(let i = 0; i < 10; i++) {
    let R = color (0, 0 ,255)
    let B = color (255, 0, 0)
    noFill();
    stroke (R)
      for (let i = 0; i <5; i++){
      ellipse (50,50,i*10);
  }
    stroke (B)
      for (let j = 5; j<10; j++){
      ellipse (50,50,j*10);
    }
  }
} 
