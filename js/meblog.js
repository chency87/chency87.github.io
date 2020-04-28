
// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function ($) {
  var MQL = 1170;
  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    
    var currentTop1 = $(window).scrollTop();
    if(currentTop1 < 60){
      
      $('.navbar-custom').removeClass('is-visible is-fixed');
    }
    $(window).on('scroll', {
      previousTop: 0
    },function () {
      var currentTop = $(window).scrollTop();
      //check if user is scrolling up
      if (currentTop < this.previousTop) {
       
        //if scrolling up...
        if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
      }
      this.previousTop = currentTop;
    });
  }
  var $backToTop = $('#back-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $backToTop.show();
    } else {
      $backToTop.hide();
    }
  });
  $backToTop.click(function () {
    $('body,html').animate({ scrollTop: 0 });
  });
});

