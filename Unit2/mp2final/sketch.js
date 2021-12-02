let timer = 0;
let mytimer = 0;
let bod, jung, wub, wuf, wdf, wdb, gun, trig, bumb;
let state = 0;
let mystate = 0;
let x = 0;
let y = 0;
var mic;
var vol;
var squak, song1;
let z = 300;
let w = 250;
let c;
//let f2;
function preload() {

  wuf = loadImage("imagesmp/wingupfront.png");
  wub = loadImage("imagesmp/wingupback.png");
  wdf = loadImage("imagesmp/wingdownfront.png");
  wdb = loadImage("imagesmp/wingdownback.png");
  jung = loadImage("imagesmp/jungle.png");
  bod = loadImage("imagesmp/body.png");
  kan = loadImage("imagesmp/kangoro.png");
  cor = loadImage("imagesmp/corocodile1.png");
  squak = loadSound('assetsounds/squawking.ogg');
  song1 = loadSound('assetsounds/bird.m4a');
}

function setup() {
  createCanvas(600, 400);
  c = 80;
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  song1.play();
  //f2 = loadFont("imagesmp/cute.otf") ;
}

function draw() {
  background("lightblue");
  image(jung, 1, 1, 600, 400);

  switch (mystate) {
    case 0:
      fill("brown");
      rect(300, 40, 100, 45);
      fill("white");
      textSize(15);
      text("Click to Start", 305, 67);
      break;

    case 1:
      mystate = 2;
      break;

    case 2:
      vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
      if (vol > .20) { // if the volume is LOUD?
        // do something
        mystate = 3;
        squak.play();

      }
      image(kan, 300, 250);
      textSize(30);
      fill("brown");
      //textFont(f2) ;
      text("please yell out to save the kangaroo's life", 200, 70);

      break;

    case 3:

      image(kan, z, w);
      z = z + 10;
      w = w - 10;
      if ((z >= 600) && (w <= 230)) {
        mystate = 4;
        squak.stop();
      }

      break;
    case 4:
      textSize(30);
      fill("brown");
      text("You saved her life.\n     Thank You!", 230, 80);
      z = 300
      break;

  }
  push();
  translate(x, y);
  avatar();
  pop();
  x = x + 2;

  if (x > width) {
    x = -50;

  }
  image(cor, c, 330, 160, 40);
  c = c + .03;


}

function avatar() {
  switch (state) {
    case 0:
      image(wub, 232, 50, 50, 60);
      image(bod, 230, 90, 75, 55);
      image(wuf, 220, 75, 65, 45);


      break;
    case 1:
      image(wdb, 262, 105, 70, 60);
      image(bod, 230, 90, 75, 55);
      image(wdf, 260, 105, 45, 65);


      break;

  }

  timer++
  if (timer > 0.4 * 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {


  if (mystate == 0) {
    mystate = 1;
  }
  //if (myState == 2) {
  //myState = 3;
  // }

  if (mystate == 4) {
    mystate = 0;
  }
}
