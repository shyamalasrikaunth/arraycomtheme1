$(window).on('load', function() {
    $("#pre-load").delay(1500).fadeOut(1000);
});
$(function () {
    var lastScrollTop = 0;
    var $topbar = $('.top-bar');
    var $navbar = $('.navbar');
    var $logo1 = $('.logo1');
    var $logo2 = $('.logo2');
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      
      if (st > 1) { // scroll down
        
        // use this is jQuery full is used
        $topbar.fadeOut()
        $navbar.addClass('sticky');
        $navbar.removeClass('bg-light');
        $navbar.addClass('bg-menucolor')
         $logo1.addClass('d-none');
         $logo1.removeClass('d-block');
         $logo2.removeClass('d-none');
         $logo2.addClass('d-block');
         $(".dot").css("background", "white");
        // use this to use CSS3 animation
        // $navbar.addClass("fade-out");
        // $navbar.removeClass("fade-in");
        
        // use this if no effect is required
        // $navbar.hide();
      } else { // scroll up
          
        // use this is jQuery full is used
        $topbar.fadeIn();
        $navbar.removeClass('sticky');
        $navbar.removeClass('bg-menucolor');
        $navbar.addClass('bg-light')
        $logo1.addClass('d-block');
         $logo2.removeClass('d-block');
         $logo2.addClass('d-none');
         $(".dot").css("background", "#bb0b0b");
        // use this to use CSS3 animation
        // $navbar.addClass("fade-in");
        // $navbar.removeClass("fade-out");
        
        // use this if no effect is required
        // $navbar.show();
      }
      lastScrollTop = st;
    });
  });
  
  $('navbar-nav').on('mouseover', 'nav-item', function() {
    $('li.active').removeClass('active');
    $(this).addClass('active');
});
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
   loop:true,
       autoplaySpeed:1000,
       items:5,
       autoplay:true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive:{
           0:{
               items:1
           },
           600:{
               items:3
           },
           1000:{
               items:5
           }
       }
 
  });
 
 });
 var counter_Up = $('.rs-count');

 if (counter_Up.length) {
     $('.rs-count').counterUp({ 
         delay: 20,
         time: 500
     });
 }
//  var win = $(window);
//  var totop = $('#scrollUp');
//  win.on('scroll', function () {
  
//      if (win.scrollTop() > 100) {
//          totop.fadeIn();
//      } else {
//          totop.fadeOut();
//      }
//  });
//  totop.on('click', function () {
//      $("html,body").animate({
//          scrollTop: 0
//      }, 100)
//  });
 