//save reference to import DOM elements
var currentDayEl = $('#currentDay');
var timeblockEl = $('.container');

//handle displaying the time
function displayCurrentTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  currentDayEl.text(rightNow);
}

//display timeblocks for standard hour from 9am to 5pm in index.html


//------------color-code each block based on hour that is past/present/future--------------------//
//if time-block hour NOW then addClass(present) 
//if time-block hour past then addClass(past) 
//if time-block hour is not happened yet  then addClass(future) 

//create function that checks and tracks hour
function hourTracker (){

  //get hold of current time hour;
  var hour = dayjs().hour();

  //loop each time-block
  $('.time-block').each(function() {
    //get hold of each hourBlock id
    var hourBlockID = $(this).attr('id');
    // split id and get hold of number, as hour10  = 10
    var splitHour = hourBlockID.split("hour")[1];
    //converts the resulting string to an integer using parseInt
    var hourBlock = parseInt(splitHour); 
    console.log(hourBlock);
  })


}

hourTracker();
















setInterval(displayCurrentTime, 1000);