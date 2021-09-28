let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {



  switch (state) {

    case 0:
      background("gray");
      text("What are the two seasons \npredominantly seen in Canada?", 100, height/2) ;
      break;

    case 1:
      background("yellow");
      text("It is just winter and then July!", 100, height/2) ;
      break;


  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
