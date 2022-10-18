// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8
  for(let i = 0; i < 8; i++){
   for(let j = 0; j < 8; j++){
    if(((i+j)%2)==1){
      fill(100)
      noStroke()
      rect(i*25,j*25,25,25)

  if(j<3){
    fill(255,0,0)
    stroke (255,0,0)
    ellipse(i*25+12.5,j*25+12,15)
}
if(j>4){
  fill(0,0,0)
  stroke (0,0,0)
  ellipse(i*25+12.5,j*25+12,15)
        }
       }
      }
     }
    }
