
let timer = 0 ;
let bod,jung, wub, wuf,wdf, wdb, gun, trig, bumb ;
let state = 0;
let x = 0 ;
let y = 0 ;

function setup() {
  createCanvas(600, 400);
  g = loadImage("imagesmp/gun.png");
    wuf = loadImage("imagesmp/wingupfront.png");
    wub = loadImage("imagesmp/wingupback.png");
    wdf = loadImage("imagesmp/wingdownfront.png");
    wdb = loadImage("imagesmp/wingdownback.png");
    jung = loadImage("imagesmp/jungle.png");
  trig = loadImage("imagesmp/trigger.png");
  bod = loadImage("imagesmp/body.png");
    bumb = loadImage("imagesmp/artboard.png");
}

function draw() {

  background("lightblue") ;
image(jung, 1,1, 600, 400);
  image(g, 58,240, 100, 60);
  fill("red");
    rect(75,320,40,40) ;
  image(trig, 75,320, 40, 40);

  push () ;
  translate(x, y) ;
  avatar() ;
pop() ;
  x = x + 2 ;
  y = y - 0.5 ;
  if ((x> width) && (y> height)) {
    x = -300 ;
    y = -300 ;
  }

  if (mouseIsPressed) {
    image(bumb, 250, 1, 200, 200);
  } else {
        }

}
function avatar() {
switch (state) {
    case 0:
    image(wub, 232,50, 50, 60);
      image(bod, 230, 90, 75, 55);
      image(wuf, 220,75, 65, 45);


      break;
      case 1:
      image(wdb, 262,105, 70, 60);
        image(bod, 230, 90, 75, 55);
        image(wdf, 260,105, 45, 65);


        break;
      }
      timer++
      if (timer > 0.4*60) {
        timer = 0 ;
        state ++ ;
        if (state> 1) {
          state = 0 ;
        }
      }

            }
