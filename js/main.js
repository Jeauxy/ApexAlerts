/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

var Page = (function() {

var $navArrows = $( '#nav-arrows' ),
  $nav = $( '#nav-dots > span' ),
  slitslider = $( '#slider' ).slitslider( {
    onBeforeChange : function( slide, pos ) {

  }
});

init = function() {

initEvents();

},
initEvents = function() {

  $nav.each( function( i ) {

      $( this ).on( 'click', function( event ) {

          var $dot = $( this );

          if( !slitslider.isActive() ) {

              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );

          }

          slitslider.jump( i + 1 );
          return false;

      } );

  } );

};

  return { init : init };

})();

Page.init();

});



$(document).ready(function(){

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

    // Slider Height
    var slideHeight = $(window).height();

    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });

});

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();
