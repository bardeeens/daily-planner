$(document).ready(function() {

const now = moment().format('MMMM Do YYYY, h:mm a');
var hr24 = moment().format('H');
let hr12 = moment().format('h'); 

$("#currentDay").html(now);

let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    planTextArr = new Array(12);
    planTextArr[7] = "Time to smoke a little weed!";
  };

  let plannerDiv = $("#dailyplanner");
  plannerDiv.empty();

  for (let hour = 9; hour <= 20; hour++) {
    let index = hour - 9;

    let rowDiv = $('<div>');
    rowDiv.addClass('row');
    rowDiv.addClass('plannerRow');
    rowDiv.attr('hour-index',hour);

    let TimeDiv = $('<div>');
    TimeDiv.addClass('col-md-2');

    const timeBoxSpn = $('<span>');
    timeBoxSpn.attr('class','timeBox');

    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    console.log(displayHour + ampm);

    timeBoxSpn.text(displayHour + ampm);

    rowDiv.append(TimeDiv);
    TimeDiv.append(timeBoxSpn);
    plannerDiv.append(rowDiv);
    // timer row/ column now built




}

});