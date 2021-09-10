var f1 ; f2;


function setup() {
createCanvas(500,500) ;
 f1 = loadFont("assets/cute.otf") ;
 f2 = loadFont("assets/s.ttf") ;
 textAlign(CENTER) ;
}
function draw() {
  background("yellow");
textFont(f1) ;
textSize(48) ;
text("Hello world", width/2 , 100) ;
textFont(f2) ;
textSize(48) ;
text("Leo", width/2, 150) ;
}
