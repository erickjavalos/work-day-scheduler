// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

// initiate day object

// define weeday dictionary 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // used as index 


// *********************************************************
// Function: updateTime()
// 
// Description: Updates the time when screen is refreshed
//
// *********************************************************

function updateTime()
{

  var today = dayjs();
  // create current day of the week string
  var currentDayStr = weekday[today.day()] + ", " + today.format('MMM D, YYYY hh:mm:ss a');
  // update current day with string object 
  $('#currentDay').text(currentDayStr);

}

// *********************************************************
// Function: updateColors()
// 
// Description: Updates colors based on current time
//
// *********************************************************

function updateColors()
{
  // grab hr from dayjs
  var currHr = parseInt(dayjs().hour());
  // iterate through normal 9 to 5 
  for (var i = 9; i < 18; i++)
  {

    // assign past class to the div
    if (i < currHr)
    {
      $('#hour-' + i).attr('class', 'row time-block past');
    }
    // assign present class to the div
    else if(i === currHr)
    {
      $('#hour-' + i).attr('class', 'row time-block present');
    }
    // assign future class to the div
    else if (i > currHr)
    {
      $('#hour-' + i).attr('class', 'row time-block future');
    }
  }
}

// *********************************************************
// Function: main()
// 
// Description: Handles how work schedule updates
//
// *********************************************************

function main()
{
  // update time respectively
  updateTime()
  // update colors respectively
  updateColors()
}

// main funciton
main()


