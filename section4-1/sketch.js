
// Setting Canvas Dimentions
function setup(){
  createCanvas(400, 400);
  background(240);

  // Creating Random Number Generator, parameters between score[i]
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(10, 40); 

  }
  console.log(scores);

  // Calculating Sum
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // Finding Average, Minimum and Maximum from here
  let average, largest, smallest;

  average = sum/scores.length
  console.log(average)

  scores.sort (largest)

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    
max = scores[9]

  }
  console.log(max)

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
min = scores[0]
  }
console.log(min)

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  line (0,average,400,average)
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
     
if  (max)
{
  fill (200,100,100)
}
else if(min)
{
  fill (100,100,200)

}
else
 {
  fill (100,200,100)
 } 


    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);
    text (average.toPrecision(3), 200, 200)
   

  }

  // BLANK[5] 平均点の線を引きます
}