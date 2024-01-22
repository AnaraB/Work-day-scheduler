//save reference to import DOM elements
var currentDayEl = $('#currentDay');
var timeblockEl = $('.container');

//handle displaying the time
function displayCurrentTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  currentDayEl.text(rightNow);
}

//display timeblocks for standard hour from 9am to 5pm 

var hour = dayjs().hour();














setInterval(displayCurrentTime, 1000);