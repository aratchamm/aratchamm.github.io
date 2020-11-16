(function($) {
  "use strict";

  $('#topNav').affix({
      offset: {
          top: 200
      }
  });
  
  $(function() {
    $("#logo").hover(
        function() {
            $(this).attr("src", "css/img/logo.gif");
        },
        function() {
            $(this).attr("src", "css/img/logo.png");
        }                         
    );                  
});
 
//Click Logo To Scroll To Top
$('#logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    },500);
});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 50
		},500);
		e.preventDefault();
    });
    
    	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});


})(jQuery);