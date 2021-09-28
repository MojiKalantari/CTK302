let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {



  switch (state) {

    case 0:
      background("gray");
      text("Why is President Obama contacting the Prime \nMinister of Canada about the failed economy?", 100, height/2) ;
      break;

    case 1:
      background("yellow");
      text("To find out how Canadians live off of less!", 100, height/2) ;
      break;
}

timer++ ;
if (timer > 3*60 )
 {
  timer = 0 ;
  state ++ ;
  if (state > 1) state = 0 ;
}

}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
