$(function() {

  if ($(document).width() <= 768){
    $('.menu').attr('id','mmenu');
    $('.menu').removeAttr('class');

    $('#mmenu').mmenu({
      'extensions': ['theme-dark'],
      'navbar' : {
        'title' : ''
      },
      'offCanvas': {
        'position': 'right'
      }
    });

    var api = $('#mmenu').data('mmenu');
    //моргает
    api.bind('open:start',function () {
      $('.arrow').css('bottom','-100px');
    });
    //моргает
    api.bind('open:finish',function () {
      $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish',function () {
      $('.hamburger').removeClass('is-active');
      $('.arrow').css('bottom','56px');
    });

//    $('.mm-menu .services').click(function() {
//      $('html, body').animate({ scrollTop: $('.main .about').height() }, 'slow');
//      return false;
//    });

  };



  $('.arrow').click(function() {
    $('html, body').animate({ scrollTop: $('.banner').height() }, 'slow');
    return false;
  });


  
  if ($(document).width() >= 1200){
    var about_img_height = $('.about .col-md-7').css('height');
    $('.about_img').css('height',about_img_height);
  }



  $('.service .text').hyphenate();  



  $('.news .owl-carousel').owlCarousel({
    //loop: true,
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
    //loop: true,
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

});