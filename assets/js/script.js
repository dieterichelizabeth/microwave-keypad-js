// Clock Object :)
const Clock = {
  isPaused: false,
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

// Display the current time
const currentTime = () => {
  let current = setInterval(timer, 30000);

  function timer() {
    let hour = dayjs().format("HH");
    let minute = dayjs().format("mm");

    if (parseInt(hour) > 10) {
      hour = hour - 12;
    } else if (parseInt(hour) === 00) {
      hour = 12;
    }
    $("#timeDisplay").text(`${hour}:${minute}`);
  }
};

// Element Listeners -------

$("#30").click(function () {
  Clock.addTime(30);
});

$("#1").click(function () {
  Clock.addTime(60);
});

$("#2").click(function () {
  Clock.addTime(120);
});

$("#3").click(function () {
  Clock.addTime(180);
});

$("#4").click(function () {
  Clock.addTime(240);
});

$("#5").click(function () {
  Clock.addTime(300);
});

$("#6").click(function () {
  Clock.addTime(360);
});

$("#7").click(function () {
  Clock.addTime(420);
});

$("#8").click(function () {
  Clock.addTime(480);
});

$("#9").click(function () {
  Clock.addTime(540);
});

$("#start").click(function () {
  Clock.unpause();
  start();
});

$("#pause").click(function () {
  Clock.pause();
});

$("#clear").click(function () {
  Clock.pause();
  Clock.clear();
});

currentTime();
