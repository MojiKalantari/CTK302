let state = 0;
let desert, ski, kish, chalus;

function preload() {

  ski = loadImage("aset/skiing.jpg");
  desert = loadImage("aset/desert.jpg");
  chalus = loadImage("aset/Autumn.jpg");
  kish = loadImage("aset/Island.jpg");
}

function setup() {
  createCanvas(420, 380);
}

function draw() {

  background("#fae1dd");

  switch (state) {
    case 0:
      fill("black");
      text("Iran is famous for its four-season weather.\nIt is considered as one of few countries in\nthe world where visitors may experience\nall four seasons in a part of the country\nall year long. You can find four seasons\nat the same time through out the year in\nevery corner of the country. Click to see\nthis beautiful country.", 15, 100);
        break;

        case 1:
        fill("black");
         image(desert, 75, 100, 250, 200);
          text("Desert in Yazd province", 80, 80);
        break;

        case 2:
        image(kish, 75, 100, 250, 200);
         fill("black"); text("Kish Island", 140, 80);
        break;

        case 3:
        image(chalus, 75, 100, 250, 200);
         fill("black"); text("Chalus Road", 140, 80);
        break;

        case 4:
        image(ski, 75, 100, 250, 200);
         fill("black"); text("Ski Resort in Tehran", 110, 80);
        break;

      }
      fill("#b5838d");
      rect(150, 310, 70, 40);
      fill("white");
      textSize(20);
      text("Click", 160, 335);
  }

  function mouseReleased() {
    if ((mouseX > 150) && (mouseX < 220) && (mouseY > 310) && (mouseY < 350)) {
      state++;
      if (state > 4) state = 0;
    }
  }
