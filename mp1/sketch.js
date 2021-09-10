let Ali, Moji;
let song1 , song2 ;
function preload() {
  song1= loadSound("assets1/happy.mp3") ;
song2= loadSound("assets1/sad.mp3") ;

}

function setup(){
  createCanvas(600,400) ;
  song1.loop() ;
  song2.loop() ;
Ali = loadImage("assets/Ali.png");
  Moji = loadImage("assets/Moji.png");
}
function draw() {
 background("lightblue");
 // image
  if (mouseIsPressed) {
    image(Moji, 270, 30, 300, 270);
  } else {
    image(Ali, 270, 30, 300, 270);
  }
      fill("green") ;
 rect(0, 350, 600, 50);


 // back

    fill("#603808");
           ellipse(147, 360, 50, 120) ;
  if (mouseIsPressed) {
   //ear
 ellipse(160, 170, 70, 40) ;
 ellipse(240, 170, 70, 40) ;
  fill("#7f5539");
  ellipse(160, 170, 50, 30) ;
 ellipse(240, 170, 50, 30) ;
 } else {
 ellipse(155, 150, 60, 40) ;
   ellipse(245, 150, 60, 40) ;
    fill("#7f5539");
    ellipse(155, 150, 45, 25) ;
 ellipse(245, 150, 45, 25) ;
 }
 //tail
 if (mouseIsPressed) {
  fill("#603808");
   ellipse(55, 370, 20, 10) ;
 triangle(50, 370, 150, 350, 200, 370);
 }else{
   fill("#603808");
   ellipse(64, 300, 20, 20) ;
 triangle(55, 295, 150, 370, 200, 370);
 }

     //body
 fill("#bc8a5f") ;
   ellipse(200, 200, 110, 100) ;

  arc(200, 290, 131, 114, PI, TWO_PI);
 rect(135, 280, 130, 120);
 //chest
   fill("#603808");
    rect(177, 310, 50, 90);
arc(202, 310, 50, 50, PI, TWO_PI);
//paws
 if (mouseIsPressed) {
    fill("#7f5539");
   arc(153, 400, 50, 45, PI, TWO_PI);
      arc(248, 400, 50, 45, PI, TWO_PI);
 }else{
   fill("#7f5539");
 arc(153, 400, 50, 45, PI, TWO_PI);
      arc(248, 400, 50, 45, PI, TWO_PI);
 fill("black")
   ellipse(140, 400, 8, 20) ;
 ellipse(154, 400, 8, 25) ;
  ellipse(167, 400, 8, 20) ;
  ellipse(248, 400, 8, 25) ;
 ellipse(260, 400, 8, 20) ;
  ellipse(235, 400, 8, 20) ;
 }
  // tie
  if (mouseIsPressed) {
    fill("darkblue")
  }else{
        fill("pink")
    }
 rect(165, 243, 73, 5, 80,80);
 triangle(200, 245, 220, 230, 220, 260);
  triangle(200, 245, 180, 230, 180, 260);
  //bone
 if (mouseIsPressed) {
   fill("#f4f3ee") ;
  ellipse(290, 370, 20, 20) ;
  ellipse(370, 370, 20, 20) ;
  rect(295, 372, 70, 15);
  ellipse(290, 386, 20, 20) ;
  ellipse(370, 386, 20, 20) ;
 }else{
        fill("#f4f3ee") ;
  ellipse(160, 220, 20, 20) ;
 ellipse(240, 220, 20, 20) ;
  rect(165, 222, 70, 15);
  ellipse(160, 238, 20, 20) ;
 ellipse(240, 238, 20, 20) ;
 }
  
  //noise eyes shadow
   fill("#7f5539");
 arc(200, 215, 55, 50, PI, TWO_PI);
 arc(187, 215, 30, 25, 0,PI, TWO_PI);
 arc(213, 215, 30, 25, 0,PI, TWO_PI);
  ellipse(180, 187, 30, 30) ;
   ellipse(220, 187, 30, 30) ;
 if (mouseIsPressed) {
   arc(200, 235 , 45, 20, PI, 0); // frown

 }else {
 arc(200, 234, 55, 30, 0,PI, TWO_PI);
 }
 // noise eyes
 if (mouseIsPressed) {
   fill("black") ;
   ellipse(180, 187, 12, 4) ;
ellipse(220, 187, 12, 4) ;
 }else {
 fill("#fcd5ce") ;
ellipse(180, 187, 15, 12) ;
ellipse(220, 187, 15, 12) ;
  fill("black") ;
   ellipse(180, 187, 9, 11) ;
ellipse(220, 187, 9, 11) ;
 }
    fill("black") ;
  ellipse(200, 210, 22, 15) ;
     triangle(188, 211, 212, 211, 200, 222);
   //bird
 if (mouseIsPressed) {
   fill("orange");
   arc(450, 370, 40, 30, 0, PI + QUARTER_PI, OPEN);
   fill("black")
   ellipse(427, 355, 20, 20);
   triangle(500, 370, 465, 375, 465, 365);
   fill("white");
   ellipse(425, 355, 6, 6);
   fill("black");
   ellipse(425, 355, 4, 4);
   fill("red");
   ellipse(414, 355, 8, 5);
   fill("gray");
   triangle(505, 355, 465, 375, 435, 370);
 } else {
   fill("orange");
   arc(200, 115, 40, 30, 0, PI + QUARTER_PI, OPEN);
   fill("black");
   ellipse(180, 100, 20, 20);
   triangle(260, 110, 217, 120, 219, 114);
   fill("gray");
   triangle(230, 90, 185, 122, 210, 122);
   fill("white")
   ellipse(178, 98, 6, 6);
   fill("black")
   ellipse(178, 98, 4, 4);
   fill("red");
   ellipse(169, 98, 8, 5);

 }
 if (mouseIsPressed) {
   fill("darkblue");
   text("My mom left us to study in the States and I'm no longer\ninterested in catching birds and chewing bones.", 30, 40);
 } else {
   fill("darkblue");
   text("My name is Leo. I'm fast in catching birds as well as chewing\nbones. I'm happy with my daddy & mommy.\nBUT...", 30, 40);
 }
 textSize(20);


   noStroke();
}
function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause() ;
  }else{
  song1.loop() ;
}
}
// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
  }
