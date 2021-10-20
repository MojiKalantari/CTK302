let numberOfTouches;
let tail, body, wing;

function setup() {
  createCanvas(400, 400);
}

//function preload() {

  //
  //
//}

function draw() {
  background("blue");
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  text("please make the Fish puzzle", 10, 40);
    body = loadImage("aset1/fishbody.png");
     tail = loadImage("aset1/fishtail.png");
wing = loadImage("aset1/fishwing.png");
  switch (numberOfTouches) {
    case 0:
      // image() mitoni image add koni
      text("no one is touching the screen", 5, 22);
      image(body, 150, 250, 50, 50);
      break;

    case 1:
      text("it's kind of lonely here", 5, 22);
       image(wing, 100, 200, 50, 50);
      // put a picture here
      break;

    case 2:
      text("two fingers are touching the screen", 5, 22);
      // put a picture here
       image(tail, 250, 250, 50, 50);
      break;

  


  }

}
