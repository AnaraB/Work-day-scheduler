//save reference to import DOM elements
let currentDayEl = $('#currentDay');
let timeblockEl = $('.container');

//handle displaying the time
function displayCurrentTime() {
  let rightNow = dayjs().format('dddd, MMMM D');
  currentDayEl.text(rightNow);
}

//display timeblocks for standard hour from 9am to 5pm in index.html

// use ready() method to make a function available after the document is loaded

$(document).ready(function(){

  //create function that checks and tracks hour
function hourTracker (){

  //get hold of current time hour;
  const hourNow = dayjs().hour();

  //loop each time-block
  $('.time-block').each(function() {
    //get hold of each hourBlock id
    var hourBlockID = $(this).attr('id');
    // split id and get hold of number, as hour10, get 10
    var splitHour = hourBlockID.split("hour")[1];
    //converts the resulting string to an integer using parseInt
    const  hourBlock = parseInt(splitHour); 
    console.log(hourBlock);

  //------------color-code each block based on hour that is past/present/future--------------------//
//if time-block hourNow is  NOW then addClass(present) 
//if time-block hourNow  past then addClass(past) 
//if time-block hourNow is not happened yet  then addClass(future) 

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


  // how to make sure that text is saved in time block when page is reloaded?
  //create for loop to iterate time-blocks and getItems from local storage if they are there

  for(let i = 9; i <= 17; i ++){
    let key = "hour" + i;
    let selector = "#" + key + " .description";

    switch(i) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      //get value from local storage to display on page
      $(selector).val(localStorage.getItem(key));
      console.log(selector);
      console.log(key);
        break;
      default: 
       console.log('no events at this hour');
       break;
    }
  }
 
return 

}



//user enters an event when he click save button
$('.saveBtn').on('click', function(){

  //save time block event in local storage
  //get values of text input and time hour
  let textInput = $(this).siblings(".description").val();
  let time = $(this).parent().attr('id');
 
  // save input and time  in local storage
  localStorage.setItem(time, textInput);



})


hourTracker();


})




// display currentTime
setInterval(displayCurrentTime, 1000);