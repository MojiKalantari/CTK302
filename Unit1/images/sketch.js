let burger, fish, veggie ;


function setup() {
  createCanvas(500, 500);
burger =  loadImage("assets/burger.jpg") ;
  fish =  loadImage("assets/fish.jpg") ;
    veggie =  loadImage("assets/veggie.jpg") ;
    imageMode (CENTER) ;
}

function draw() {
background ("green") ;
image (burger, width/2, height/2, 100, 100) ;
image (fish, width/2, height/2-120, 100, 100) ;
image (veggie, width/2, height/2+120, 100, 100) ;
}
