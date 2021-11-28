// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var y = 0;
var windspeed = 0 ;
var tempt = 0;
var humid = 0;
let weth;

function setup() {
  createCanvas(410, 400);
    weth = loadImage("asset6/weather.png");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=San Francisco,CA,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=89170a1568b396658a907106aeed489b';

// USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
tempt = weather.main.temp ;
humid = weather.main.humidity ;
}


function draw() {

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('lightblue');
    image(weth,0,200,400,170);
      fill('yellow');
      textSize(15);
      text("What is the weather in " + weather.name + "?", 20, 30);
      text("windspeed\n\n\n      " + windspeed, 300, 230);
 text("temperature\n\n\n       " + tempt, 170, 240);
       text("humidity\n\n\n      " + humid, 50, 240);

      // cloud
      fill('white');
      noStroke();
      ellipse(x, 100, 200, 100);
      ellipse(y, 115, 300, 50);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;
      y = y + windspeed;
      if (y > width) y = 0;

      break;

  }

}
