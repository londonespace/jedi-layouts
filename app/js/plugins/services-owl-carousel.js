$(function () {
	$('.carousel-services').on('initialized.owl.carousel', () => setTimeout(setHeightForCarouselImages));

	$('.carousel-services').owlCarousel({
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>',
			'<i class="fa fa-angle-double-right"></i>'],
		dots: false,
		startPosition: 1,
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},

			768: {
				items: 2
			},

			1200: {
				items: 3
			}

		}
	});

	$(window).on('resize', alignCarouselItemsHeight);

	function setHeightForCarouselImages() {
		let items = $('#carousel-services').find('[class$="item"]');

		items.each(function () {
			let itemHeight = $(this).find('.carousel-services-content').outerHeight();
			let itemImage = $(this).find('[class$="image"]');

			itemImage.css('min-height', itemHeight);
		});
	}

	function alignCarouselItemsHeight() {
		$('.carousel-services-content').equalHeights();
	}
});
