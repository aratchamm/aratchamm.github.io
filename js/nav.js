$(function () {
    $(document).scroll(function () {
      var $nav = $(".inner");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });