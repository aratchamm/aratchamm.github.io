/* This pen use Lettering.js to wrap each letter, nothing more. */

$(document).ready(function() {
	$(".flag").lettering();
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
	interval: false
  });
  

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

var $namo = $('.namo');

$namo.on('mouseenter focus', function()
{
    $namo.get(0).play();
});

$namo.on('mouseout blur', function()
{
    $namo.get(0).pause();
});

var $python = $('.python');

$python.on('mouseenter focus', function()
{
    $python.get(0).play();
});

$python.on('mouseout blur', function()
{
    $python.get(0).pause();
});