
function countdown() {
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  console.log(distance)
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = "<h3>" + days + "</h3>";
  document.getElementById("hours").innerHTML = "<h3>" + hours  + "</h3>"
  document.getElementById("minutes").innerHTML = "<h3>" + minutes + "</h3>";
  document.getElementById("seconds").innerHTML = "<h3>" + seconds  + "</h3>";

    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)
    
};
countdown();

/* ------------------------------------ nav menu ------------------------------------- */

function toggle(){
    /* $("#first").css("display", "block"); */
    $("#singers h3").click(function (e) {
        $(e.target).next().slideToggle(500);
        $("#singers div").not($(e.target).next()).slideUp(500);
    })
}
toggle();

/* ------------------------------ text area------------ */

function textarea(){
    $("textarea").keyup(function (){
        var charlength = $(this).val().length;
        var maxLength = 100;

        if (charlength > maxLength) {
            document.getElementById('num').innerHTML = "You have exceeded the maximum number of characters ";
        }
        else{
            document.getElementById('num').innerHTML = maxLength - charlength;
        }
    })
}
textarea();

    
