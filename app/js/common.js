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

	$('.carousel-services').on('initialized.owl.carousel', () => setTimeout(carouselService));

	$('.carousel-services').owlCarousel({
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>',
			'<i class="fa fa-angle-double-right"></i>'],
		dots: false,
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

	function carouselService() {
		let items = $('#carousel-services').find('[class$="item"]');

		items.each(function () {
			let itemHeight = $(this).find('.carousel-services-content').outerHeight();
			let itemImage = $(this).find('[class$="image"]');
			console.log(itemImage);

			itemImage.css('min-height', itemHeight);
		});
	}

	$('.carousel-services-headling').each(function () {
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	function onResize() {
		$('.carousel-services-content').equalHeights();
	}

	window.on('resize', onResize);
});
