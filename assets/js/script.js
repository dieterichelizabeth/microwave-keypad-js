// Clock Object :)
const Clock = {
  isPaused: false,
  mins: 0,
  sec: 0,
  time: 0,
  addTime: function (num) {
    this.time = this.time + num;
  },
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
  console.log("start clock");
});

$("#pause").click(function () {
  console.log("pause clock");
});

$("#clear").click(function () {
  console.log("clear clock");
});
