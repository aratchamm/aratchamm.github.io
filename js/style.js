
(function($) {
  "use strict";
  
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 200
});

  $('#topNav').affix({
      offset: {
          top: 200
      }
  });


	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		},500);
		e.preventDefault();
    });
    

    var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: true,
        pagination: ".swiper-pagination",
        
        speed: 1000,
        paginationClickable: true,
        parallax: true,
        autoplay: false,
        effect: "slide",
      });
      
      document.getElementsByTagName("h1")[0].style.fontSize = "5em";

      var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
    
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });


})(jQuery);






