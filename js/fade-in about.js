const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  

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