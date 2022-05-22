//time display
var dateTime = null;
var date = null;

var update = function () {
  date = moment(new Date());
  dateTime.html(date.format("dddd MMMM Do YYYY, hh:mm:ss"));
};

$(document).ready(function () {
  dateTime = $("#dateTime");
  update();
  setInterval(update, 1000);
});

//save with saveBtn
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings("textarea").val();
    var time = $(this).parent().attr("id");

    // Savein local storage
    localStorage.setItem(time, text);
    console.log(time, text);
  });

  function timeTracker() {
    //current hours for tracker
    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));
      //background color indicators with time
      if (blockTime < timeNow) {
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  var saved9 = localStorage.getItem("saveText9");
  document.getElementById("9").value = saved9;
  var saved10 = localStorage.getItem("text10");
  document.getElementById("10").value = saved10;
  var saved11 = localStorage.getItem("text11");
  document.getElementById("11").value = saved11;
  var saved12 = localStorage.getItem("text12");
  document.getElementById("12").value = saved12;
  var saved13 = localStorage.getItem("text13");
  document.getElementById("13").value = saved13;
  var saved14 = localStorage.getItem("text14");
  document.getElementById("14").value = saved14;
  var saved15 = localStorage.getItem("text15");
  document.getElementById("15").value = saved15;
  var saved16 = localStorage.getItem("text16");
  document.getElementById("16").value = saved16;
  var saved17 = localStorage.getItem("text17");
  document.getElementById("17").value = saved17;

  timeTracker();
});

//display saved task
function setPlanner() {
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
      $(this).children(".plan").val(schedule);
    }
  });
}
setPlanner();
