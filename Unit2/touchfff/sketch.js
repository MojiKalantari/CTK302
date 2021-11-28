let numberOfTouches ;
let img1, img2, img3, img4;

function setup() {
  createCanvas(700, 600);
  img1 = loadImage("aset/chalusAutumn.jpg");
  img2 = loadImage("aset/desertyazd.jpg");
  img3 = loadImage("aset/kishIsland.jpg");
  img4 = loadImage("aset/skiingTehran.jpg");

  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen\n Chalus Road North of Iran", 5, 22) ;
      image(img1, 200, 200, 600, 300);
      break ;

      case 1:
      text("it's kind of lonely here\nDesert in Yazd Province in Iran", 5, 22) ;
      image(img2, 200, 200, 600, 300);
      break ;

      case 2:
      text("two fingers are touching the screen\nKish Island in Iran", 5, 22) ;
      image(img3, 200, 200, 600, 300);
      break ;

      case 3:
      text("three are touching the screen\nSki Resort in Tehran. The Capital of Iran", 5, 22) ;
      image(img4, 200, 200, 600, 300);
      break ;


  }

}
