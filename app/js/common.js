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

});
