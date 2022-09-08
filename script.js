var time = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
var currentTime = moment().hour()
var hour = moment().hours();

var eight = $("#8am");
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var thirteen = $("#1pm");
var fourteen = $("#2pm");
var fifteen = $("#3pm");
var sixteen = $("#4pm");
var seventeen = $("#5pm");
var eighteen = $("#6pm");
var nineteen = $("#7pm");
var twenty = $("#8pm");

let m = moment();
$('#currentDay').html(m.format('MMMM DD YYYY'));


function background () {

    var init8 = JSON.parse(localStorage.getItem("8:00 am"));
        eight.val(init8);

    var init9 = JSON.parse(localStorage.getItem("9:00 am"));
        nine.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
        ten.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
        eleven.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
        twelve.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
        thirteen.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
        fourteen.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
        fifteen.val(init3);
    
    var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
        sixteen.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
        seventeen.val(init5);
    
    var init6 = JSON.parse(localStorage.getItem("6:00 pm"))
        eighteen.val(init6);
    
    var init7 = JSON.parse(localStorage.getItem("7:00 pm"))
        nineteen.val(init7);

    var init8 = JSON.parse(localStorage.getItem("8:00 pm"))
        twenty.val(init8);
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }


var saveTasks = function() {

    userInput = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
}

window.onload = background()
$(".saveBtn").on("click", saveTasks);