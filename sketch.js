var timeleft = 10;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  var hour = floor(min / 60);
  return nf(hour, 2) + ':' + nf(min, 2) + ':' + nf(sec, 2);
}

var audio = new Audio('alarm.mp3');
// // function preload() {
// //   song = loadSound('alarm.mp3');
// // }

// function alarm() {
//   song = loadSound("alarm.mp3");
//   createCanvas(720, 200);
//   background(255, 0, 0);
// }

// // function preload() {
// //   ding = loadSound("alarm.mp3");
// // }

function setup() {
  noCanvas();
  startTime = millis();



  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  } else if (params.hour) {
    var hour = params.hour;
    timeleft = hour * 60;
  }

  var timer = select("#timer");
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);

  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    console.log(`Current time var: ${currentTime}
    timeleft var: ${timeleft}`)
    if (currentTime == timeleft) {
      audio.play();
      clearInterval(interval);
      // counter = 0;
    }
  }

};