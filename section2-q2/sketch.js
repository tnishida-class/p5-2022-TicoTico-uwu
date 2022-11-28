// チェッカー
function setup() {
  createCanvas(200, 200);

//Color Coordinates  
    let B= color (160,160,160)
    let Bl = color (20,20,20)
    let R = color(210,43,43)
    let W= color (255,255,255)

noStroke()

//Checkers Board
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){

       if ((i+j)%2==1)
        {
          fill (B)
          }

      else{
          fill (W)
        }
        
      rect(20*j,20*i,20,20);


      }
    }
  
//Red Circles
  for(let k = 0; k < 8; k++){
    for(let l = 0; l < 3; l++){
    
      fill (R)

      if ((l+k)%2==1)
{
      circle(10+(20*k),10+(20*l),10);
      
}       
      }
    }

//Black Circles

  for(let k = 0; k < 8; k++){
    for(let l = 5; l < 8; l++){
      

        fill (Bl)
        if ((l+k)%2==1)
  {
        circle(10+(20*k),10+(20*l),10);
        
  }       
        }
      }

  }