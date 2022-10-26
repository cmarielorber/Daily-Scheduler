// today's day and date
const todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
      
        const text = $(this).siblings(".details").val();
        const time = $(this).parent().attr("id");

        // local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //current number of hours.
        const timeNow = moment().hour();

        
        $(".timeBlock").each(function () {
            const blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage 
    $("#hour8 .details").val(localStorage.getItem("hour8"));
    $("#hour9 .details").val(localStorage.getItem("hour9"));
    $("#hour10 .details").val(localStorage.getItem("hour10"));
    $("#hour11 .details").val(localStorage.getItem("hour11"));
    $("#hour12 .details").val(localStorage.getItem("hour12"));
    $("#hour13 .details").val(localStorage.getItem("hour13"));
    $("#hour14 .details").val(localStorage.getItem("hour14"));
    $("#hour15 .details").val(localStorage.getItem("hour15"));
    $("#hour16 .details").val(localStorage.getItem("hour16"));
    $("#hour17 .details").val(localStorage.getItem("hour17"));
    $("#hour18 .details").val(localStorage.getItem("hour18"));
    $("#hour19 .details").val(localStorage.getItem("hour19"));
    $("#hour20 .details").val(localStorage.getItem("hour20"));

    timeTracker();
})