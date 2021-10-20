let timer= 0 ;
let state= 0 ;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  switch(state) {
    case 0 :
      background ("red") ;
      fill(225, 50) ;
      for (var j=0 ; j < height ; j +=20) {
  for (var i=0 ; i < width ; i+=20) {
         rect(i, j, 15, 15) ;
  }
}
      text("state 0", 100, 100) ;
      break ;
      case 1 :
         background ("blue") ;
       for (var j=0 ; j < height ; j +=20) {
  for (var i=0 ; i < width ; i+=20) {
         rect(i, j, 15, 15) ;
  }
}
      text("state 1", 100, 100) ;
      break ;
      case 2 :
         background ("yellow") ;
       for (var j=0 ; j < height ; j +=20) {
  for (var i=0 ; i < width ; i+=20) {
         rect(i, j, 15, 15) ;
    noStroke() ;
  }
}
      text("state 2", 100, 100) ;
      break ;
      case 3 :
         background ("pink") ;
       for (var j=0 ; j < height ; j +=20) {
  for (var i=0 ; i < width ; i+=20) {
         rect(i, j, 15, 15) ;
    noStroke() ;
  }
}
            text("state 3", 100, 100) ;
      break ;
      case 4 :
         background ("orange") ;
       for (var j=0 ; j < height ; j +=20) {
  for (var i=0 ; i < width ; i+=20) {
         rect(i, j, 15, 15) ;
    noStroke() ;
  }
}

      text("state 4", 100, 100) ;
      break ;
}
  timer++ ;
  if (timer >= 4*60){
    timer = 0 ;
    state++ ;
    if (state > 4) state= 0 ;
  }
}
function mouseReleased (){
  state = state +1 ;
  if (state > 4) {
    state = 0 ;
  }
}
