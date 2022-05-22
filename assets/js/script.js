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
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  timeTracker();
});
