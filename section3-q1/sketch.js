//Variables
let x;
let y;
let z

//Canvas Setup
function setup(){
  createCanvas(300, 300);
  x=150;
  y=150;
  z= 50;
}


//Draw Function
function draw(){
  background(5, 39, 94)
  if(keyIsDown ("P".charCodeAt(0)))
  {
z+=2.5
  }
else{
  z+=1
}


ellipse (x,y,z)




fill (200,19,19)

if (z<50,z>100)
{z=-1*z}

}
