let cars = [];
let bike1;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }


}
function preload() {
    bike1 = loadImage("aset1/bike.png");
}

function draw() {
  background("lightgray");



  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
     cars.splice(i,0.) ;
    }

  }
  fill("green");
  textSize(25);
text('Think about the environment!',80,100);
  image(bike1,285,300,120,120);
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(width -200, height-100);
     this.vel = createVector(random(-6, -2), random(-.1,.0));
    //this.pos = createVector(width/2, height-80);
    //this.vel = createVector(random(-.1, .1), random(-6, -2));
    this.a = random(200) ;
  }

  // methods
  display() {
    fill(70, this.a);
    ellipse(this.pos.x, this.pos.y, 15, 20);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 4;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
  //  if (this.pos.y < 0) this.pos.y = height;
  }
}
