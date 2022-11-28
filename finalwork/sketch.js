// variables declared
let mH;
let cHor;
let cVer;
let inc;
let z;
let n1;



function setup(){
  createCanvas(400, 400);
cVer = 200;
cHor = 200;
inc = 1;
mH = 100;
z = 50;
n1 = 5
gate1 = false;
gate2 = false;
gate3 = false;
gate4 = false;

originalHazard()
}

function originalHazard(){

//Death Conditions using circle collision calculation xdist^2+ydist^2 <radiidist^2 for each missile. 

if ((cHor-100)*(cHor-100) + (cVer-mH)*(cVer-mH) < (250))
  {  
  fill(255,255,255)
  textSize(50);       
  textFont("serif");  
  text("YOU DIED", 100, 200);
  type ('YOU DIED');
  return;
}
else if ((cHor-300)*(cHor-300) + (cVer+mH)*(cVer+mH) < (250))
  {
    fill(255,255,255)
  textSize(50);       
  textFont("serif");  
  text("YOU DIED", 100, 200);
  type ('YOU DIED');
  return;
  }
else if ((cHor+mH)*(cHor+mH) + (cVer-100)*(cVer-100) < (250))
  {
    fill(255,255,255)
  textSize(50);       
  textFont("serif");  
  text("YOU DIED", 100, 200);
  type ('YOU DIED');
  return;
  
  }
else if ((cHor-mH)*(cHor-mH) + (cVer-300)*(cVer-300)<(250))
  {
    fill(255,255,255)
  textSize(50);       
  textFont("serif");  
  text("YOU DIED", 100, 200);
  type ('YOU DIED');
  return;
  }
  else {
  };
}

function draw (){
  background(160, 192, 255); 
//movement of character
if(keyIsDown ("A".charCodeAt(0)))
{cHor-=inc}
if(keyIsDown ("D".charCodeAt(0)))
{cHor+=inc}
if(keyIsDown ("W".charCodeAt(0)))
{cVer-=inc}
if(keyIsDown ("S".charCodeAt(0)))
{cVer+=inc}

//actual shape
var player = ellipse (cHor,cVer,5,5)

//setting boundaries between dimentions
if (cHor<0)
  {cHor=0};
if (cHor>400)
  {cHor=400};
if (cVer<0)
  {cVer=0};
if (cVer>400) 
  {cVer=400};

  //moving hazards 4 original moving circles. 
mH+= 7

fill (190,39,39)
missile1 = ellipse (100,mH,50)
missile2= ellipse (300,-mH,50)
missile3= ellipse (-mH,100,50)
missile4= ellipse (mH, 300,50)

if (mH<0,mH>400)

{mH=-1*mH}

//gate1 fill conditions
 fill (50,200,50)
rect(0,0,5,400)
  
if (cHor<5)
{
  gate1 = true;
  console.log(gate1);
}
 
if (gate1 == true) {
  fill (50,200,50)
  rect(0,0,400,5);

  //creating hazard set 2
  fill (200,19,19)
  z+= 1;
  ellipse (200,200,z)
  if (z<50,z>100)
  {z=-1*z}

  if ((cHor-150)*(cHor-150) + (cVer-150)*(cVer-150) < (z+5)*(z+5))
  {
    fill(255,255,255)
  textSize(50);       
  textFont("serif");  
  text("YOU DIED", 100, 200);
  type ('YOU DIED');
  return;
  }
}


//gate 2 fill conditions
if(cVer<5)
{
  gate2 = true;
  console.log(gate2);
}

if (gate2 == true){
fill (50,200,50)
rect(0,395,400,5)

fill (200,19,19)

//creating hazard set 3
n1+=1;
ellipse(50,50,n1)
ellipse(350,50,n1)
ellipse(50,350,n1)
ellipse(350,350,n1)
if (n1<25,n1>50)
{n1=-1*n1}


if ((cHor-350)*(cHor-350)/2 + (cVer-50)*(cVer-50)/2 < (n1+5)*(n1+5))
{
  fill(255,255,255)
textSize(50);       
textFont("serif");  
text("YOU DIED", 100, 200);
type ('YOU DIED');
return;
}

if ((cHor-50)*(cHor-50)/2 + (cVer-350)*(cVer-350)/2 < (n1+5)*(n1+5))
{
  fill(255,255,255)
textSize(50);       
textFont("serif");  
text("YOU DIED", 100, 200);
type ('YOU DIED');
return;
}

if ((cHor-350)*(cHor-350)/2 + (cVer-350)*(cVer-350)/2 < (n1+5)*(n1+5))
{
  fill(255,255,255)
textSize(50);       
textFont("serif");  
text("YOU DIED", 100, 200);
type ('YOU DIED');
return;
}


}


//gate 3 fill conditions
if (cVer>395)
{
  gate3 = true
  console.log(gate3);
}

if (gate3 == true)
{

fill (20,100,190)
rect(395,100,5,200)
}


//gate 4 fill conditions 
if (cHor>395)
{
  gate4 = true
  console.log(gate4);
}


//win condition!!!
if (gate1 ==true && gate2==true && gate3==true && gate4==true)
{
  fill (255,255,255)
  rect(100,100,200,200)
}



}










