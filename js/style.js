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
 

})(jQuery);