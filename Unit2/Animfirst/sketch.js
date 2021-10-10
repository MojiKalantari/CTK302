let x=0 ;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#a8dadc");
fill(random(100,255));
  rect(x,100,100,100);
  x= x + 3 ;
  if (x > width) {
    x = 0 ;
  }

}
