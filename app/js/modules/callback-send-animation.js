$(document).ready(function () {
	let callback = $("#s-call-callback");
	let successMassage = callback.find('.success-massage');
	let transitionDuration = 1000;

	callback.submit(function () {
		event.preventDefault();

		successMassage.addClass('active').css('display', 'flex');
		successMassage.hide().fadeIn(transitionDuration);

		setTimeout(() => {
			successMassage.fadeOut(transitionDuration).removeClass('active');
			callback.trigger("reset");
		}, 3000);
	});
});