$(function () {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],

		navbar: {
			title: '<img src="img/dest/logo-1.svg" alt="Салон красоты Митлер">'
		},

		offCanvas: {
			position: 'right'
		}
	});

	let menuAPI = $('#my-menu').data('mmenu');

	menuAPI.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	});

	menuAPI.bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>',
			'<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},

			800: {
				items: 2
			},

			1100: {
				items: 3
			}

		}
	});
});
