// Clock Object :)
const Clock = {
  isPaused: false,
  isRunning: false,
  mins: 0,
  sec: 0,
  time: 0,
  addTime: function (num) {
    if (this.time + num < 1800) {
      this.time = this.time + num;
      this.formatAndDisplay();
    } else {
      this.time = 1800;
      this.formatAndDisplay();
      console.log("disable buttons");
    }
  },
  clear: function () {
    this.time = 0;
    this.formatAndDisplay();
  },
  formatAndDisplay: function () {
    // convert the time to mins/secconds
    this.mins = Math.floor(this.time / 60);
    this.sec = this.time % 60;
    // add placeholder "0" for format
    if (this.mins < 10) {
      this.mins = "0" + this.mins;
    }
    if (this.sec < 10) {
      this.sec = "0" + this.sec;
    }
    // Display the time
    $("#timeDisplay").text(`${this.mins}:${this.sec}`);
  },
  pause: function () {
    this.isPaused = true;
  },
  unpause: function () {
    this.isPaused = false;
  },
  start: function () {
    this.isRunning = true;
  },
  stop: function () {
    this.isRunning = false;
    currentTime();
  },
};

// Countdown timer function :)
const start = () => {
  let runClock = setInterval(timer, 1000);

  function timer() {
    if (Clock.isPaused === false) {
      Clock.time--;
      Clock.formatAndDisplay();
      if (Clock.time === 0) {
        clearInterval(runClock);
        timesUp();
      }
    } else {
      clearInterval(runClock);
    }
  }
};

// const disable = (el) => {
//   $(el).attr("disabled", "true");
// };

// const enable = (el) => {
//   $(el).attr("disabled", "false");
// };

// Display the current time
const currentTime = () => {
  timer();
  let current = setInterval(timer, 30000);

  // Stop the current time from displaying if the clock is running
  function timer() {
    if (Clock.isRunning) {
      clearInterval(current);
    } else {
      let hour = dayjs().format("HH");
      let minute = dayjs().format("mm");

      if (parseInt(hour) > 10) {
        hour = hour - 12;
      } else if (parseInt(hour) === 00) {
        hour = 12;
      }
      $("#timeDisplay").text(`${hour}:${minute}`);
    }
  }
};

// Food is done!
const timesUp = () => {
  let message = setInterval(timer, 1000);
  let index = 0;

  function timer() {
    if (index < 3) {
      const messageArr = ["Food", "Is", "Ready"];
      $("#timeDisplay").text(messageArr[index]);
      index++;
    } else {
      clearInterval(message);
    }
  }
};

// Element Listeners -------
$(".num").click(function () {
  let num = parseInt(this.id);
  if (num !== 30) {
    num = num * 60;
  }
  Clock.addTime(num);
});

$("#start").click(function () {
  Clock.unpause();
  Clock.start();
  start();
});

$("#pause").click(function () {
  Clock.pause();
});

$("#clear").click(function () {
  Clock.pause();
  Clock.clear();
  Clock.stop();
});

currentTime();
// disable("#start");
// disable("#pause");
