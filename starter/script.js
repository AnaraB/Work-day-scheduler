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
//if time-block hourNow is  NOW then addClass(present) 
//if time-block hourNow  past then addClass(past) 
//if time-block hourNow is not happened yet  then addClass(future) 

//create function that checks and tracks hour
function hourTracker (){

  //get hold of current time hour;
  var hourNow = dayjs().hour();

  //loop each time-block
  $('.time-block').each(function() {
    //get hold of each hourBlock id
    var hourBlockID = $(this).attr('id');
    // split id and get hold of number, as hour10  = 10
    var splitHour = hourBlockID.split("hour")[1];
    //converts the resulting string to an integer using parseInt
    var hourBlock = parseInt(splitHour); 
    console.log(hourBlock);

  //create conditional statements to check time and based on that add color-code background

  if(hourBlock < hourNow){    10 < 12
    //past
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");


  } else if ( hourBlock === hourNow) {
    //present
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");


  } else {
    //future
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

  }


  })




}

hourTracker();
















setInterval(displayCurrentTime, 1000);