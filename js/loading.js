
   if(screen.width < 767 ||
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPod/i)) {
		$(document).ready(function() {

			// Will wait for everything on the page to load.
			$(window).bind('load', function() {
				$('.overlay, body').addClass('loaded');
				setTimeout(function() {
					$('.overlay').css({'display':'none'})
				}, 4000)
			});
		})
	}
	else $(document).ready(function() {
		// Will remove overlay for users cannnot load properly.
		setTimeout(function() {
			$('.overlay, body').addClass('loaded');
		});

		// Will wait for everything on the page to load.
		$(window).bind('load', function() {
			$('.overlay, body').addClass('loaded');
			setTimeout(function() {
				$('.overlay').css({'display':'none'})
			}, 4000)
		});

	})