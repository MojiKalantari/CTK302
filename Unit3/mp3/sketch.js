var cars = [];
let botteles = [];
let botel, b;

var frogPos;
var myState = -2;
var timer = 0;
var robotc, robotl, robotr;
var bag;
var bags = [];
var bea, wel, wo;
var los, firstpage;
var ssng, song, font;
var Robotsound1, robotwin, robotlos;
let x = 0;

function preload() {
  robotsound1 = loadSound('asset2/audio.wav');
  ssng = loadSound('asset2/robotsound.mp3');
  robotwin = loadSound('soundgame/winsound.wav');
  robotlos = loadSound('soundgame/sadsound.wav');
}

function setup() {

  createCanvas(600, 600);

  bags[0] = loadImage("asset2/bagleft.png");
  bags[1] = loadImage("asset2/bagright.png");
  robotr = loadImage("asset2/robotright.png");
  robotl = loadImage("asset2/robotleft.png");
  robotc = robotl;
  botel = loadImage('asset2/b.png');
  bag = loadImage("asset2/bagleft.png");
    firstpage = loadImage("asset2/first.png");
  bea = loadImage('asset2/world.png');
  los = loadImage("asset2/coverlos.png");
  wel = loadImage("asset2/welcome.png");
  wo = loadImage("asset2/win.png");
  font = loadFont("asset2/fontrobot.ttf");

 for (let j = 0; j < 5; j++) {
   botteles.push(new Botel());
 }

  //spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());

  }

  //initial frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {
    case -2:
  image(firstpage, width / 2, height - 300, 600, 600);

    break;

    case -1:
      robotsound1.play();
      myState = 0;
      break;

    case 0:

      //background('#ffcb08');
      fill(random(20, 230));
      textFont(font); // SETS the font
      textSize(40);

      image(wel, width / 2, height / 2);
      text("Click to Play", x, 150);
      x += 3;
      if (x > 800) {
        x = 0;
      }
      fill('black');
      text("Help me to save the environment.", 20, 70);


      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        myState = 2;
        ssng.stop();
        robotlos.play();

      }
      break;

    case 2:
      image(los, width / 2, height / 2);
      fill("black")
      textSize(35);
      textFont(font);
      text("You made me sad.Try more next time.", 20, 60);

      break;

    case 3:
      image(wo, width / 2, height / 2);
      fill("black");
      textSize(40);
      textFont(font);
      text("Excellent!!!", 200, 60);

      break;


  }


}

function mouseReleased() {
  switch (myState) {
    case -2:
    myState = -1;
    break;

    case 0:
      robotsound1.stop();
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      robotlos.stop();
      robotsound1.play();
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  car = []; //clear the array
//  botteles = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  //for (let j = 0; j < 5; j++) {
  //  botteles.push(new botel());

  robotwin.stop();
  robotsound1.play();
  timer = 0;
}


// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(bags.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 60);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(bags[this.birdNum], this.pos.x, this.pos.y, 60, 60);
    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      if (this.birdNum > bags.length - 1) this.birdNum = 0;
      this.timer = 0;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function Botel() {
  //attributes
this.pos = createVector(100, 100);
 this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
 this.g = random(255);
 this.b = random(255);


  //methods
 this.display = function() {
   fill(this.r, this.g, this.b);
   image(botel, this.pos.x, this.pos.y, 40, 50);


 }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) robotc = robotl;
  if (keyCode === RIGHT_ARROW) robotc = robotr;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}



function game() {
  background("#1b85c2");
  image(bea, width / 2, height - 300, 700, 500);

  //iterate
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //test if car is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

      ssng.play();

    }
  }
  for (let j = 0; j < botteles.length; j++) {
   botteles[j].display();
   botteles[j].drive();

   if (botteles[j].pos.dist(frogPos) < 50) {
     botteles.splice(j, 1);
       ssng.play();
         }
 }

  if (cars.length == 0 && botteles.length == 0) {
    ssng.stop();
    robotwin.play();
    timer = 0
    myState = 3; // they won
  }

  image(robotc, frogPos.x, frogPos.y, 150, 200);
  checkForKeys();

}

function touchStarted() {
  getAudioContext().resume();

}
