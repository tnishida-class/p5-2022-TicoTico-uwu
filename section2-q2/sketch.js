// チェッカー
function setup() {
  createCanvas(200, 200);

//Color Coordinates  
    let B= color (0,0,0)
    let W= color (255,255,255)

//Color Fill
    if((i+j)/2 == 0) {
      fill (B) 

      else {
        fill (W)
      }
    }


//Size Condition    


//Checkers Board
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      rect(10*j,10*i,10,10);

      }
    }
  }
