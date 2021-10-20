var myState = 0;
var timer = 0;
var body;
var wing;
var tail;

function setup() {

  createCanvas(400,300);
  body = loadImage("imageaset/fishbody.png");
wing = loadImage("imageaset/fishwing.png");
    tail = loadImage("imageaset/fishtail.png");


}


function draw() {
    background('blue');
  switch (myState) {

    case 0:

      image(body, 200, 100, 70, 70);


      break;

    case 1:
          image(wing, 200, 100, 70, 70);


      break;


    case 2:
        image(tail, 200, 100,70,70);

        break;
        case 3:
            image(body, 200, 100, 70,70);
              image(wing, 200, 100, 70, 70);
                      image(tail, 200, 100,70,70);
      }

      timer++;
      if (timer > 4 * 60) {
        myState = 4;
        timer = 0;
      }
      timer++ ;
        if (timer >= 4*60){
          timer = 0 ;
          myState++ ;
          if (myState > 3) myState= 0 ;
        }



  }



  function mouseReleased() {

    myState = myState + 1;
    if (myState > 3) {
      myState = 0;

    }
  }


  function touchStarted() {
    getAudioContext().resume();
  }
