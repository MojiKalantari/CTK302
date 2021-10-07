let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assetss/first.wav");
  song2 = loadSound("assetss/second.wav");
  song3 = loadSound("assetss/third.mp3");
  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0: //spawn song 1
      background('gray');
      song1.play();
      state = 1;
      break;

    case 1: // listen to song 1
      background('red');
      break;

    case 2: // spawn song 2
      song2.play();
      state = 3;
      break;

    case 3:
      background('orange');
      break;

    case 4: // spawn song 3
      song3.play();
      state = 5;
      break;

    case 5: // listen to song 3
      background('gray');
      break;

  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();
  state++;
  if (state > 5) {
    state = 0;
  }
}
