// timer display element
var microwaveTimerEl = document.getElementById("timeDisplay");

// timer variables
var beginMicrowave = -1;

function updateTimer(minutes) {
  const singletimerFormat = "0X:00";
  const doubletimerFormat = "X:00";

  // get the current time
  var timeNow = parseInt(
    document
      .getElementById("timeDisplay")
      .innerHTML.replace(/\s/g, "")
      .slice(0, 2)
  );

  // add the minutes and turn to string
  let addTime = timeNow + minutes;
  addTime.toString();

  // use the timer formates to display to the user
  if (addTime <= 9) {
    let newTime = singletimerFormat.replace("X", addTime);
    microwaveTimerEl.innerHTML = newTime;
  } else {
    let newTime = doubletimerFormat.replace("X", addTime);
    microwaveTimerEl.innerHTML = newTime;
  }
}

function timeSelected() {
  // get the start time from the timeDisplay HTML
  var timeAtStart = parseInt(
    document
      .getElementById("timeDisplay")
      .innerHTML.replace(/\s/g, "")
      .slice(0, 2)
  );
  let time = timeAtStart * 60;

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
    // (when clear is clicked)

    // stop countdown
    clearInterval(beginMicrowave);
    // display time
    microwaveTimerEl.innerHTML = "00:00";

    // reset the time variable
    time = timeAtStart * 60;
  }
}

// start button -- use function format for # buttons
var startEl = document.getElementById("start");
startEl.addEventListener("click", function () {
  timeSelected();
  startEl.disabled = true;
  stopEl.removeAttribute("disabled");
});

// stop button
var stopEl = document.getElementById("stop");
stopEl.addEventListener("click", function () {
  timeSelected();
  stopEl.disabled = true;
  startEl.removeAttribute("disabled");
});

// clear button
var clearEl = document.getElementById("clear");
clearEl.addEventListener("click", function () {
  time = 0;
  timeSelected(time);
});

// Number buttons
var button01 = document.getElementById("1");
button01.addEventListener("click", function () {
  updateTimer(1);
});

var button02 = document.getElementById("2");
button02.addEventListener("click", function () {
  updateTimer(2);
});

var button03 = document.getElementById("3");
button03.addEventListener("click", function () {
  updateTimer(3);
});

var button04 = document.getElementById("4");
button04.addEventListener("click", function () {
  updateTimer(4);
});

var button05 = document.getElementById("5");
button05.addEventListener("click", function () {
  updateTimer(5);
});

var button06 = document.getElementById("6");
button06.addEventListener("click", function () {
  updateTimer(6);
});

var button07 = document.getElementById("7");
button07.addEventListener("click", function () {
  updateTimer(7);
});

var button08 = document.getElementById("8");
button08.addEventListener("click", function () {
  updateTimer(8);
});

var button09 = document.getElementById("9");
button09.addEventListener("click", function () {
  updateTimer(9);
});
