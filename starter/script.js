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
    // split id and get hold of number, as hour10, get 10
    var splitHour = hourBlockID.split("hour")[1];
    //converts the resulting string to an integer using parseInt
    var hourBlock = parseInt(splitHour); 
    console.log(hourBlock);

  //create conditional statements to check time and based on that add color-code background

  if(hourBlock < hourNow){    
    //past = grey background
    $(this).removeClass("present");
    $(this).removeClass("future");
    $(this).addClass("past");


  } else if ( hourBlock === hourNow) {
    //present = red background 
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");


  } else {
    //future = green background
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

  }


  })

}

hourTracker();

//user enters an event when he click save button
$('.saveBtn').on('click', function(){

  //save time block event in local storage
  //get values of text input and time hour
  var textInput = $(this).siblings(".description").val();
  console.log(textInput);
  var time = $(this).parent().attr('id');

  localStorage.setItem(textInput, time);



})
















setInterval(displayCurrentTime, 1000);