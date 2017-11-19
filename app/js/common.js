$(function() {



  if ($(document).width() <= 768){
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $(this).toggleClass('hamburger-mobile');
      $('.menu').toggleClass('menu-mobile');
    });
  };



  $('.arrow').click(function() {
    $('html, body').animate({ scrollTop: $('.banner').height() }, 'slow');
    return false;
  });


  
  if ($(document).width() >= 1200){
    about_img_height = $('.about .col-md-7').css('height');
    $('.about_img').css('height',about_img_height);
  }



  $('.services .text').hyphenate();  



  $('.news .owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });



  $('.news .text').dotdotdot();



  $('.reviews .owl-carousel').owlCarousel({
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        }
    }
  });



  $('.reviews .text').hyphenate();



  if ($(document).width() >= 768){
    $('.services').waypoint(function(direction) {
      $('.services .item:eq(0)').addClass('bounceInLeft').addClass('animated').css('display','block');
      }, {
        offset: '75%'
      }
    );
    $('.services').waypoint(function(direction) {
      $('.services .item:eq(2)').addClass('bounceInRight').addClass('animated').css('display','block');
      }, {
        offset: '75%'
      }
    );
    $('.services').waypoint(function(direction) {
      $('.services .item:eq(1)').addClass('bounceInUp').addClass('animated').css('display','block');
      }, {
        offset: '75%'
      }
    );
  }else{
    $('.services').waypoint(function(direction) {
      $('.services .item').addClass('bounceIn').addClass('animated').css('display','block');
      }, {
        offset: '75%'
      }
    );
  };
  $('.footer').waypoint(function(direction) {
    $('.map').addClass('zoomIn').addClass('animated').css('display','block');
    }, {
      offset: '75%'
    }
  );




  alert();

});