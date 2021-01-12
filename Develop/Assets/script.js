$(document).ready(function(){

const now = moment().format('MMMM Do YYYY, h:mm a');
var hr24 = moment().format('H');

$("#currentDay").text(now)

let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
let planTextArr;
if (storedPlans !== null) {
    planTextArr = storedPlans;
    console.log("storage present");
  } 
  else {
    planTextArr = new Array(12);
    planTextArr[1] = "Time for class!";
    console.log("storage empty");
  };

console.log(planTextArr);

let containerDiv = $(".container")
containerDiv.empty();

for (let hour = 9; hour <= 20; hour++) {
    let index = hour - 9;

    let rowDiv = $("<div>");
  rowDiv.addClass("row");
  rowDiv.attr('hour-index', index);

    let colmd2Div = $('<div>');
    colmd2Div.addClass('col-md-2');

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

    rowDiv.append(colmd2Div);
    colmd2Div.append(timeBoxSpn);

    let colmd9Div = $('<div>');
    colmd9Div.addClass('col-md-9');

    let dailyPlanSpn = $('<input>');
    dailyPlanSpn.attr('id',`input-${index}`);
    dailyPlanSpn.attr('hour-index',index);
    dailyPlanSpn.attr('type','text');
    dailyPlanSpn.addClass("textarea")

    dailyPlanSpn.val(planTextArr[index]);

    rowDiv.append(colmd9Div);
    colmd9Div.append(dailyPlanSpn);

    let colmd1Div = $("<div>");
    colmd1Div.addClass("col-md-1");

    let saveBtn = $('<button>');
    saveBtn.attr('id',`saveid-${index}`);
    saveBtn.attr('save-id',index);
    saveBtn.attr('class',"fa fa-save saveBtn");
    saveBtn.on("click", saveFunc);

    rowDiv.append(colmd1Div);
    colmd1Div.append(saveBtn);
    containerDiv.append(rowDiv);

    


    changeRowColor(rowDiv, hour);
    console.log("working");
}



function changeRowColor (hourRow,hour) { 

    if ( hour < hr24) {
      
      hourRow.addClass("past")
    } else if ( hour > hr24) {
      hourRow.addClass("present")
    } else {
      hourRow.addClass("future")
    }
  };

  function saveFunc(event) {
    event.preventDefault();  
    index = this.getAttribute("save-id")
    otherindex = this.getAttribute("hour-index")

    
    var input = document.getElementById('input-' + index).value
    planTextArr[index]= input;
    console.log(planTextArr);
    localStorage.setItem("storedPlans",JSON.stringify(planTextArr));
    console.log(planTextArr);

    //add text from input to planTextArray
    
  
     }
})