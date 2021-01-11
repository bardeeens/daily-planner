$(document).ready(function() {

const now = moment().format('MMMM Do YYYY, h:mm a');
var hr24 = moment().format('H'); 

$("#currentDay").html(now);

let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if (storedPlans !== null) {
    planTextArr = storedPlans;
  } 
  else {
    planTextArr = new Array(12);
    planTextArr[1] = "Smoke weed everyday!";
  };

  let plannerDiv = $("#dailyplanner");
  plannerDiv.empty();

  for (let hour = 9; hour <= 21; hour++) {
    let index = hour - 9;

    let rowDiv = $('<div>');
    rowDiv.addClass('row');
    rowDiv.addClass('plannerRow');
    rowDiv.attr('hour-index', index);

    let TimeDiv = $('<div>');
    TimeDiv.addClass('col-md-2');

    const timeBoxSpn = $('<span>');
    timeBoxSpn.attr('class','timeBox');

    let displayHour = 12;
    let ampm = "";

    if (hour === 12) {
      ampm = "pm";
    } else if (hour >= 13) { 
      displayHour = hour - 12;
      ampm = "pm";
    }
    else {
      displayHour = hour;
      ampm = "am";
    }

    timeBoxSpn.text(displayHour + ampm);

    rowDiv.append(TimeDiv);
    TimeDiv.append(timeBoxSpn);
    
    // timer row/ column now built
    let dailyPlanSpn = $('<input>');

    dailyPlanSpn.attr('id',`input-${index}`);
    dailyPlanSpn.attr('hour-index',index);
    dailyPlanSpn.attr('type','text');
    // dailyPlanSpn.attr('class','dailyPlan');
    dailyPlanSpn.val(planTextArr[index]);

    let plannerTextDiv = $('<div>');
    plannerTextDiv.addClass('col-md-9');

    rowDiv.append(plannerTextDiv);
    plannerTextDiv.append(dailyPlanSpn);

    let saveDiv = $('<div>');
    saveDiv.addClass('col-md-1');

    let saveBtn = $('<button>');
    saveBtn.attr('id',`saveid-${index}`);
    saveBtn.attr('save-id',index);
    saveBtn.attr('class',"far fa-save saveIcon");
    // saveBtn.on("click", saveFunc)

    rowDiv.append(saveDiv);
    saveDiv.append(saveBtn);
    plannerDiv.append(rowDiv);
    
    changeRowColor(rowDiv, hour);
    
    
}

function changeRowColor (hourRow,hour) { 

  if ( hour < hr24) {
    
    hourRow.css("background-color","tomato")
  } else if ( hour > hr24) {
    hourRow.css("background-color","lightgreen")
  } else {
    hourRow.css("background-color","blue")
  }
};

//   function saveFunc(event) {

//   event.preventDefault();  
//   console.log(this);

//   let index = 0;

//   let inputId = '#input-'+ index;
//   let value = $(inputId).val();

//   planTextArr[index] = value;


// console.log('value ', value); 
//  console.log('index ', index); 
//  console.log('click pta after '+ planTextArr); 
//  console.log(localStorage);

//   localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
// };  
});