var bubbles = [];
  var b;
let url = '';

function setup() {

  b = loadImage('assetf/brain.png');

   let key = '15Nhuk4Q80PG2QpgQHXkZ137qNUngzqxaDjxX4j4nuEQ'; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]['How would you rate your mental health?'], data[i]["How often do you actually feel happy?"], data[i]["To what extent do you consider yourself successful?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  background('brown');
image(b, width / 2, height - 300, 400, 400);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(mental, happy, successful) { // only the order of these parameters matters!
    this.mental = mental;
    this.happy = happy;
    this.successful = successful;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(4, 7), 0);

  }


  display() {
stroke("yellow");
    noFill();
    rect(this.pos.x, this.pos.y+10, 120, 120);
    fill('white');
    text(this.mental + "\n" + this.happy + "\n" + this.successful, this.pos.x, this.pos.y);
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
  }


}
