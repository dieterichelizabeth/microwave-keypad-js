// When the user clicks a button, the timer starts based on that #
// timer display element
var microwaveTimerEl = document.getElementById("timeDisplay");

// start button -- use function format for # buttons
var startEl = document.getElementById("start");
startEl.addEventListener("click", function () {
  console.log("start!");
  console.log(time);
  timeSelected();
  startEl.disabled = true;
  stopEl.removeAttribute("disabled");
});

// stop button
var stopEl = document.getElementById("stop");
stopEl.addEventListener("click", function () {
  console.log("stop!");
  timeSelected();
  stopEl.disabled = true;
  startEl.removeAttribute("disabled");
  console.log(time);
});

// clear button
var clearEl = document.getElementById("clear");
clearEl.addEventListener("click", function () {
  time = 0;
  timeSelected(time);
});

// timer variables
var timeAtStart = 10;
let time = timeAtStart * 60;
var beginMicrowave = -1;

function timeSelected() {
  if (time > 0) {
    if (beginMicrowave == -1) {
      beginMicrowave = setInterval(function () {
        if (time > 0) {
          // convert the time to mins/secconds
          var mins = Math.floor(time / 60);
          // add placeholder "0" for format
          if (mins < 10) {
            mins = "0" + mins;
          }
          let secs = time % 60;
          // add placeholder "0" for format
          if (secs < 10) {
            secs = "0" + secs;
          }

          microwaveTimerEl.innerHTML = mins + ":" + secs;
          time--;
        } else {
          console.log("ding");
          clearInterval(beginMicrowave);
          microwaveTimerEl.innerHTML = "00:00";
        }
      }, 1000);
    } else {
      // stops the timer (when stop is clicked)
      clearInterval(beginMicrowave);
      beginMicrowave = -1;
    }
  } else if (time == 0) {
    // resets the timer (when clear is clicked)
    // stop countdown
    clearInterval(beginMicrowave);
    // display time
    microwaveTimerEl.innerHTML = "00:00";

    time = timeAtStart * 60;
  }
}
