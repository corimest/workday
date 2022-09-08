var currentTime = moment().hour()
var hour = moment().hours();

var eight = $("#8");
var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var thirteen = $("#13");
var fourteen = $("#14");
var fifteen = $("#15");
var sixteen = $("#16");
var seventeen = $("#17");
var eighteen = $("#18");
var nineteen = $("#19");
var twenty = $("#20");

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