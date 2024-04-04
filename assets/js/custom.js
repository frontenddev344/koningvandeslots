document.addEventListener("DOMContentLoaded", function() {
    var acceptCookiesBtn = document.getElementById("accept-cookies");
    var cookiesPopup = document.getElementById("cookies-popup");

    acceptCookiesBtn.addEventListener("click", function() {
        cookiesPopup.style.display = "none";
        // You can add code here to set a cookie to remember the user's choice
    });
});


$(document).ready(function(){
    $(".toggle").click(function(){
      $("body").addClass("menu-toogle");
    });
   });

   $(document).ready(function(){
    $(".close-icn").click(function(){
      $("body").removeClass("menu-toogle");
    });
   });
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});
});