$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() <= $(this).height()) $('#to-top-button').removeClass('active');

    if ($(this).scrollTop() > $(this).height()) $('#to-top-button').addClass('active');
  });

  $('#to-top-button').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
  });
});