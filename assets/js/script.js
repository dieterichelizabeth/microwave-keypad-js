// When the user clicks a button, the timer starts based on that #

//stop button
var stopEl = document.getElementById('stop');

var timeAtStart = 10
let time = timeAtStart * 60;

var microwaveTimerEl = document.getElementById('timeDisplay');
setInterval(beginMicrowave, 1000);

function beginMicrowave () {
    // convert the time to mins/secconds
    var mins = Math.floor(time / 60);
    // add placeholder "0" for format
    if (mins<10) {
        mins = '0' + mins;
    }
    let secs = time % 60;
    // add placeholder "0" for format
    if (secs<10) {
        secs = '0' + secs;
    }

    microwaveTimerEl.innerHTML = mins + ":" + secs;
    time --;
}