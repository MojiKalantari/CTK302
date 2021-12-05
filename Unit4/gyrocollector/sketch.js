
// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var x1 = 0; // acceleration data
var y1 = 0;
var z1 = 0;
var xPosition = 0;
var yPosition = 0;
let botteles = [];
let botel, b;
var bea;
var robotc, robotl, robotr;
var bags = [];
var bag, robotfinal;
var Botel;

// var bunnyImage;
var cars = [];
var frogPos;


function setup() {

  createCanvas(600, 600);
    bea = loadImage('asset2/world.png');
 bags[0] = loadImage("asset2/bagleft.png");
 bags[1] = loadImage("asset2/bagright.png");
//  robotr = loadImage("asset2/robot2.png");
   bag = loadImage("asset2/bagleft.png");
//  robotc = robotl;
  botel = loadImage('asset2/b.png');


  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

   for (let j = 0; j < 40; j++) {
     botteles.push(new Botel());
   }


  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
    robotl = loadImage("asset2/robotfinal.png");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff'); // light blue
  imageMode(CENTER);
  image(bea, width / 2, height - 300, 600, 600);
  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
    image(robotl, 0, 0, 150, 200);
  //fill('green');
//  ellipse(0, 0, 80, 80);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  for (let j = 0; j < botteles.length; j++) {
   botteles[j].display();
   botteles[j].drive();

   if (botteles[j].pos.dist(frogPos) < 50) {
     botteles.splice(j, 1);
               }
 }

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("Help me to save the environment!", width / 2, 600, windowWidth - 200, windowHeight - 200);


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  // textAlign(LEFT);
  // textSize(20);
  // fill('white');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);


}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}
function deviceShaken() {
  // re-spawn cars
  botteles = []; // clear the array first
  for (var j = 0; j < 40; j++) {
       botteles.push(new Botel());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





// car class!!
function Car() {
  // attributes
  this.pos = createVector(300, 300);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!

    // image(botel, this.pos.x, this.pos.y, 40, 50);
      image(bag, this.pos.x, this.pos.y, 60, 60);


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
  // attributes
  this.pos = createVector(300, 300);
  this.vel = createVector(random(-2, 5), random(-2, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!

     image(botel, this.pos.x, this.pos.y, 40, 50);
    //  image(bag, this.pos.x, this.pos.y, 60, 60);


  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x1 > 500) this.pos.x1 = 0;
    if (this.pos.x1 < 100) this.pos.x1 = 500;
    if (this.pos.y1 > 500) this.pos.y1 = 0;
    if (this.pos.y1 < 100) this.pos.y1 = 500;

  }

}
