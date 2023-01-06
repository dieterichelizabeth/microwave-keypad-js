// Clock Object :)
const Clock = {
  state: "off", // State can be "off", "paused", or "running"
  timerIsOn: false,
  mins: 0,
  sec: 0,
  time: 0,
  timer: [0, 0, 0, 0], // 00:00
  addTime: function (num) {
    // Prevent Time from going over 30 minutes
    if (this.time + num < 1800) {
      this.time = this.time + num;
      this.formatAndDisplay();
    } else {
      this.time = 1800;
      this.formatAndDisplay();
    }
  },
  clearTimer: function () {
    this.timerIsOn = !this.timerIsOn;
    this.timer = [0, 0, 0, 0];
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
  timerEdit: function (num) {
    // Prevent array[2] from going over 5
    if (this.timer[2] !== 0 && this.timer[1] === 0 && num > 5) {
      return;
    } else {
      if (this.timer[0] === 0) {
        this.timer.shift();
        this.timer.push(num.toString());
      }
      $("#timeDisplay").text(
        `${this.timer[0]}${this.timer[1]}:${this.timer[2]}${this.timer[3]}`
      );
    }
  },
  timerStart: function () {
    this.mins = this.timer[0] + this.timer[1];
    this.sec = this.timer[2] + this.timer[3];
    let minutes = this.mins * 60;
    this.time = parseInt(minutes) + parseInt(this.sec);
  },
  updateState: function (param) {
    if (param === "off") {
      this.time = 0;
      this.state = param;
    } else {
      this.state = param;
    }
  },
};

// Countdown timer function :)
const start = () => {
  console.log("here");
  let runClock = setInterval(timer, 1000);

  function timer() {
    if (Clock.state === "running") {
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

// Display the current time
const currentTime = () => {
  timer();
  let current = setInterval(timer, 30000);

  // Stop the current time from displaying if the clock is running
  function timer() {
    if (Clock.state === "running") {
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

const enable = (btns) => {
  btns.forEach((btn) => $(btn).removeAttr("disabled"));
};

const disable = (btns) => {
  btns.forEach((btn) => $(btn).attr("disabled", "true"));
};

// TODO: Refactor button handling
const btnHandler = (param) => {
  switch (param) {
    case "clockStart":
      enable(["#start", "#pause"]);
      disable(["#popcorn", "#potato", "#timer"]);
      break;
    case "clockStop":
      disable(["#start", "#pause", "#0"]);
      enable(["#popcorn", "#potato", "#timer"]);
      break;
    case "timerEnabled":
      enable(["#start", "#pause", "#0"]);
      disable(["#popcorn", "#potato"]);
      break;
    default:
      return;
  }
};

const reset = () => {
  currentTime();
  btnHandler("clockStop");
};

// Element Listeners -------
$(".num").click(function () {
  let num = parseInt(this.id);
  if (Clock.timerIsOn) {
    Clock.timerEdit(num);
  } else {
    if (num !== 30) {
      num = num * 60;
    }
    btnHandler("clockStart");
    Clock.addTime(num);
  }
});

$("#popcorn").click(function () {
  Clock.addTime(150);
  btnHandler("clockStart");
  Clock.updateState("running");
  start();
});

$("#potato").click(function () {
  Clock.addTime(420);
  btnHandler("clockStart");
  Clock.updateState("running");
  start();
});

$("#timer").click(function () {
  if (Clock.timerIsOn) {
    Clock.clearTimer();
    Clock.updateState("off");
    reset();
  } else {
    Clock.formatAndDisplay();
    btnHandler("timerEnabled");
    Clock.timerIsOn = true;
  }
});

$("#start").click(function () {
  if (Clock.timerIsOn) {
    Clock.timerStart();
  }
  btnHandler("clockStart");
  Clock.updateState("running");
  start();
});

$("#pause").click(function () {
  Clock.updateState("paused");
});

$("#clear").click(function () {
  Clock.clearTimer();
  Clock.updateState("off");
  reset();
});

reset();
