$(function() {

  $('#my-menu').menu({
    extensions: ['theme-dark', 'effect-menu-slide', 'pagedim-black'],
    navbar:{
      title: ''
    },
    offCanvas: {
      position: 'right'
    }
  });

  var api = $('#my-menu').data('mmenu');
  api.bind('open:finish',function () {
    $('.hamburger').addClass('is-active');
  });
  api.bind('close:finish',function () {
    $('.hamburger').removeClass('is-active');
  });

	/*
  if ($(document).width() < 768){
		$('.main_header_menu').attr('id','mmenu');
		$('.main_header_menu').removeAttr('class');
	};

	$('#mmenu').mmenu({
		'extensions': ['theme-dark'],
		'navbar' : {
			'title' : ''
		},
  	'offCanvas': {
    	'position': 'right'
   	}
  });

  */

});