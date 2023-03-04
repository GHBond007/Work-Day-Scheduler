// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("D MMM YYYY");
var currentHour = moment().format('HH:mm:ss a');
// hour and user input var

var nineAm = $("09:00 hours");
var tenAm = $("10:00 hours");
var elevenAm = $("11:00 hours");
var twelvePm = $("12:00 hours");
var onePm = $("13:00 hours");
var twoPm = $("14:00 hours");
var threePm = $("15:00 hours");
var fourPm = $("16:00 hours");
var fivePm = $("17:00 hours");

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
//Initialize function to 
function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("01:00pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(init5);
  
  
} 

function background () {
      
  $(".text-line").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}
// Function to keep text in background
$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".text-line").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // Button for clear the day
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});

  



 