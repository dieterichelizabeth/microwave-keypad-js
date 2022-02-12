// When the user clicks a button, the timer starts based on that #

// start button -- use function format for # buttons 
var startEl = document.getElementById('start');
startEl.addEventListener('click', function(){
	console.log("click");
    timeSelected();
    startEl.disabled = true;
    stopEl.removeAttribute('disabled');
});

// stop button
var stopEl = document.getElementById('stop'); 
stopEl.addEventListener('click', function(){
    console.log("stop!");
    timeSelected();
    stopEl.disabled = true;
    startEl.removeAttribute('disabled');
});

// clear button
var clearEl = document.getElementById('clear');
clearEl.addEventListener('click', function(){
    console.log("clear!");
    time = 0;
    timeSelected(time);
})

// right now, timer set to 10 minutes
var timeAtStart = 10
let time = timeAtStart * 60;
var beginMicrowave = -1;

var microwaveTimerEl = document.getElementById('timeDisplay');



function timeSelected () {
   if (time > 0) {
    if (beginMicrowave == -1) {
        beginMicrowave =  setInterval(function(){
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
       console.log(beginMicrowave);
       console.log(time);
        }, 1000);
    }
    else {
        clearInterval(beginMicrowave);
        console.log(beginMicrowave);
        beginMicrowave = -1;
    }
   }
   else if (time ==  0) {
    microwaveTimerEl.innerHTML = "00:00";
   }
}