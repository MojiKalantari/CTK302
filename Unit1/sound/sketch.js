
let jazzy ;

function preLoad() {
jazzy= loadSong("assets/jazzy.mp3") ;
}


function setup() {
  createCanvas(500, 500);
  jazzy.loop() ;
}


function draw() {
  background("blue") ;

}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
