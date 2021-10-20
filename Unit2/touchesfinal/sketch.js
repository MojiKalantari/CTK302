let numberOfTouches;
let body, tail, wing;



function preload() {
  body = loadImage("aset1/fishbody.png");
  tail = loadImage("aset1/fishtail.png");
  wing = loadImage("aset1/fishwing.png");


}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  clear();
  numberOfTouches = touches.length;


  switch (numberOfTouches) {
    case 0:
      background("blue");
          textSize(35);
      fill("white");
      text("please make the Fish puzzle", 10, 40);

      break;

    case 1:

        image(wing, 100, 200, 50, 50);
          break;



          case 2:

            image(tail, 250, 250, 50, 50);
            break;



            case 3: //intro


              image(body, 250, 250, 50, 50);
              break;



                }
              }
              // function mouseReleased(){
              //   if (!song1.isPlaying()) {
              //     song1.play();
              //   }
              // }

              // function mousePressed() {
              //   if (song1.isPlaying()) {
              //     song1.pause();
              //   } else {
              //     song1.play();
              //   }
              // }

              function touchStarted() {
                getAudioContext().resume();
                if (!(song1.isPlaying())) {
                  song1.loop();
                }
              }
