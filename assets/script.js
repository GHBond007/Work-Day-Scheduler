// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("D MMM YYYY");
var currentHour = moment().format('HH:mm:ss a');
// Get references to the HTML elements for each hour block
var timeBlock9 = $("09:00 hours");
var timeBlock10 = $("10:00 hours");
var timeBlock11 = $("11:00 hours");
var timeBlock12 = $("12:00 hours");
var timeBlock1 = $("13:00 hours");
var timeBlock2 = $("14:00 hours");
var timeBlock3 = $("15:00 hours");
var timeBlock4 = $("16:00 hours");
var timeBlock5 = $("17:00 hours");

var hour = moment().hours();
var userInput;
var hourSpan;
// var for the hourSpan

// Current time and day

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('HH:mm:ss A'));
}, 100);
//This function initializes the page by setting the values of each time block based on the user's saved input
function initPage() {
//Get the saved input for each time block from local storage and set the value of the corresponding input element
  console.log("Current Hour " + hour);
  timeBlock9.val(localStorage.getItem("09:00 am"));
  timeBlock10.val(localStorage.getItem("10:00 am"));
  timeBlock11.val(localStorage.getItem("11:00 am"));
  timeBlock12.val(localStorage.getItem("12:00 pm"));
  timeBlock1.val(localStorage.getItem("01:00 pm"));
  timeBlock2.val(localStorage.getItem("02:00 pm"));
  timeBlock3.val(localStorage.getItem("03:00 pm"));
  timeBlock4.val(localStorage.getItem("04:00 pm"));
  timeBlock5.val(localStorage.getItem("05:00 pm"));
  
} 
// This function sets the background color of each time block based on the current time
function setBackground () {
  // Get the current hour using Moment.js
      hour = moment().hours();

      // Loop through each time block
  $(".text-line").each(function () {
    // Get the hour for this time block by parsing the ID attribute
    var timeBlockHour = parseInt($(this).attr("id"));
  
// Compare the current hour to the hour for this time block and set the appropriate class for the background color
if (hour > timeBlockHour) {
  $(this).addClass("past");
} else if (hour < timeBlockHour) {
  $(this).addClass("future");
} else {
  $(this).addClass("present");
}
      
  });
}

$(document).ready(function(){
  initPage()
  setBackground()

  // This function saves the user's input to local storage when the corresponding save button is clicked
  $(".saveBtn").on("click", function(){
    // Get the user's input and the corresponding hour for this time block
    userInput = $(this).siblings(".text-line").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan)
    // Save the user's input to local storage
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

});

// Call the setBackground function to initialize the background color of each time block
setBackground();

// Call the initPage function to set the initial values of each time block based on saved input
initPage();

// Call the setBackground function again every minute to update the background color based on the current time
setInterval(setBackground, 60000); 



 