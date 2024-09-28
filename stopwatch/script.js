let time = document.querySelector('.time'); // Use querySelector for a single element
let start = document.getElementById('Start1');
let stop = document.getElementById('stop2');
let reset = document.getElementById('reset3');

let msecs = 0;
let secs = 0;
let mins = 0;

let timeID = null;

start.addEventListener('click', function () {
//   if (timeID !== null) {
//     clearInterval(timeID);
//   }
  timeID = setInterval(timeable, 10);
});

stop.addEventListener('click', function () {
  clearInterval(timeID);
});

reset.addEventListener('click', function () {
  clearInterval(timeID);
  time.innerHTML = '00 : 00 : 00';
  msecs = secs = mins = 0;
});

function timeable() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {  // secs should reset at 60, not 59
      secs = 0;
      mins++;
    }
  }

  // Use backticks (`) for template literals
  let msecString = msecs < 10 ? `0${msecs}` : msecs;
  let secString = secs < 10 ? `0${secs}` : secs;
  let minString = mins < 10 ? `0${mins}` : mins;

  time.innerHTML = `${minString} : ${secString} : ${msecString}`;
}
