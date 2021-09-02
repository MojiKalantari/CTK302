var f1 ;


function setup() {
createCanvas(500,500) ;
 f1 = loadFont("assets/cute.otf") ;
}
function draw() {
  background("yellow");
textFont(f1) ;
textSize(48) ;
text("Hello world", 100, 100) ;
}
