// Clock Object :)
const Clock = {
  isPaused: false,
  mins: 0,
  sec: 0,
  time: 0,
  addTime: function (num) {
    this.time = this.time + num;
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
      }
    } else {
      clearInterval(runClock);
    }
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
  start();
});

$("#pause").click(function () {
  console.log("pause clock");
});

$("#clear").click(function () {
  console.log("clear clock");
});
