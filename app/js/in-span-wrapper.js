$(function () {
  $('.carousel-services-headling').each(wrapLastWordInSpan);
  $('.section-common-headling').each(wrapFirstWordInSpan);

  function wrapFirstWordInSpan() {
    $(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
  }

  function wrapLastWordInSpan() {
    $(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  }
});