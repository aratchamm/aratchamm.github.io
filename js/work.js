/* This pen use Lettering.js to wrap each letter, nothing more. */

$(document).ready(function() {
	$(".flag").lettering();
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
	interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
	var next = $(this).next();
	if (!next.length) {
	  next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	if (next.next().length>0) {
	  next.next().children(':first-child').clone().appendTo($(this));
	} else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
  });

    
var $blog = $('.blog');

$blog.on('mouseenter focus', function()
{
    $blog.get(0).play();
});

$blog.on('mouseout blur', function()
{
    $blog.get(0).pause();
});

var $hallu = $('.hallu');

$hallu.on('mouseenter focus', function()
{
    $hallu.get(0).play();
});

$hallu.on('mouseout blur', function()
{
    $hallu.get(0).pause();
});

