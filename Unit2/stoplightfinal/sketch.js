let timer = 0 ;
let state = 0 ;
let x = 270 ;
let vel = 0 ;
let light, bik ;

function preload() {

  bik = loadImage("assset/bike.png");
  light = loadImage("assset/stoplight.png");
}
function setup() {
  createCanvas(600, 400);
    rectMode(CENTER) ;
}

function draw() {
  background ("lightblue") ;
  fill("darkgray");
  rect(1, 370, 1200,60);

  image(light, 430,20);
  //fill ('yellow') ;
  //rect (width/2 , height/2 , 200, 600) ;

  switch (state) {
    case 0: // red
    fill('red') ;
    ellipse(470 , 55 , 44, 44);
  //  fill('gray') ;
  //  ellipse(width/2 , height/2 , 150, 150);
  //  ellipse(width/2 , height/2 + 180 , 150, 150);
    vel = 0 ;
    timer++ ;
    if (timer > 3*60) {
      timer = 0 ;
      state = 1 ;
    }
    break ;
    case 1: //green
  //  fill('gray') ;
  //  ellipse(width/2 , height/2 - 180 , 150, 150);
    //  ellipse(width/2 , height/2 , 150, 150);
        fill('green') ;
    ellipse(470 , 155 , 44, 44);
    vel = 10 ;
    timer++ ;
    if (timer > 3.55*60) {
      timer = 0 ;
      state = 2 ;
    }
    break ;
    case 2: //yellow
//  fill('gray') ;
  //  ellipse(width/2 , height/2 - 180 , 150, 150);
      fill('orange') ;
      ellipse(470 , 105 , 44, 44);
      //  fill('gray') ;
  //  ellipse(width/2 , height/2 + 180 , 150, 150);
    vel = 5 ;
    timer++ ;
    if (timer > 3*60) {
      timer = 0 ;
      state = 0;
    }
    break ;

  }
//timer++ ;
//if (timer > 3*60) {
  //timer = 0 ;
//  state ++ ;
  //if (state> 2) {
  //  state = 0 ;
  //}
//}
// the car rectMode
// make a rectangle
//fill ("purple") ;
//rect(x, height-100, 100,50) ;
image(bik, x, height-160);
x = x + vel ;
//if ((vel=0) && (x= 470))
if (x > width) {
  x = 0 ;
}

}
