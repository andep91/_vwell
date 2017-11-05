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

});