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
    api.bind('open:finish',function () {
      $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish',function () {
      $('.hamburger').removeClass('is-active');    
    });
  };
  
  /*if ($(document).width() >= 1200){
    var about_img_height = $('.about .composition').css('height');
    $('.about_img').css('height',about_img_height);
  }*/

});