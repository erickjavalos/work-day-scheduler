// *******************************************************************************
//
// Developer: Erick Avalos
//
// Description: A simple web application that allows you to manage your work day through a calendar
//
// *******************************************************************************


// jquery selector for all buttons
var buttonVar = $('button')

// define weeday dictionary 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

// Test Variables 
var DEBUG = false
var hrTest = 10;

// *******************************************************************************
//
// Function: updateTime()
// 
// Description: Updates the time when screen is refreshed
//
// *********************************************************

function updateTime()
{
  // grab information of day
  var today = dayjs();
  // create current day of the week string
  var currentDayStr = weekday[today.day()] + ", " + today.format('MMM D, YYYY');
  // update current day with string object 
  $('#currentDay').text(currentDayStr);

}

// *******************************************************************************
//
// Function: updateColors()
// 
// Description: Updates colors based on current time
//
// *******************************************************************************

function updateColors()
{

  // grab hr from dayjs
  var currHr = parseInt(dayjs().hour());
  // debug for testing at night
  if (DEBUG)
  {
    currHr = hrTest
  }
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

// *******************************************************************************
//
// Function: updateSavedData()
// 
// Description: Updates schedule with saved data in local 
// memory
//
// *******************************************************************************

function updateSavedData()
{

  for (var i = 9; i < 18; i++)
  {
    // dyamically update hour
    var id = 'hour-' + String(i)
    // grab text object saved in local storage
    var text = JSON.parse(localStorage.getItem(id))
    // check if id saved is in local storage
    if (text !== null)
    {
      // append data into textarea
      console.log($('#' + id).children('textarea')[0])
      $('#' + id).children('textarea')[0].innerText = text.textEvent
    }
  }
}

// *******************************************************************************
//
// Function: main()
// 
// Description: Handles how work schedule updates
//
// *******************************************************************************

function main()
{
  updateSavedData();
  // set global interval so that colors can change with change of time
  setInterval(function() {
      // update time respectively
    updateTime();
    // update colors respectively
    updateColors();
    // update localStorage elements saved
  },100)
}
// *******************************************************************************
//
// main function
//
// *******************************************************************************

main()

// *******************************************************************************
//
// Event Handlers
//
// *******************************************************************************

function processButton(event) 
{
    // extract id of parent
    var id = $(this).parent()[0].id    
    // save data to local storage
    var textEvent = $(this).parent().children().eq(1).val();
    // create data object
    var data = 
    {
      'textEvent': textEvent,
    }
    // append data to localStorage
    localStorage.setItem(id, JSON.stringify(data))
}

buttonVar.on('click', processButton)

