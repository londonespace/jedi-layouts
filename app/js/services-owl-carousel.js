$(function () {
	$('.carousel-services').on('initialized.owl.carousel', () => setTimeout(setHeightForCarouselImages));

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

	$('.carousel-services-headling').each(wrapLastWordInSpan);

	window.on('resize', alignCarouselItemsHeight);

	function setHeightForCarouselImages() {
		let items = $('#carousel-services').find('[class$="item"]');
		console.log(1);

		items.each(function () {
			let itemHeight = $(this).find('.carousel-services-content').outerHeight();
			let itemImage = $(this).find('[class$="image"]');

			itemImage.css('min-height', itemHeight);
		});
	}

	function wrapLastWordInSpan() {
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	}

	function alignCarouselItemsHeight() {
		$('.carousel-services-content').equalHeights();
	}
});
