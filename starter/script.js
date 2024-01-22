//save reference to import DOM elements
var currentDayEl = $('#currentDay');
var container = $('.container');

//handle displaying the time
function displayCurrentTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  currentDayEl.text(rightNow);
}


setInterval(displayCurrentTime, 1000);