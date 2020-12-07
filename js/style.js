
(function($) {
  "use strict";
  
 


  $('#topNav').affix({
    offset: {
        top: 200,
    }

 

  });

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#header"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		},1000);
		e.preventDefault();
    });

    	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#workandproject"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		},1000);
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