$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const maxChars = 140;
    let characterCount = $(this).parent().siblings(".tweet-submit").children('.counter');

    characterCount.text(() => {
      if (maxChars - $(this).val().length < 0) {
        characterCount.addClass('overLimit');
      } else {
        characterCount.removeClass('overLimit');
      }
      return (maxChars - $(this).val().length);
    });
  });
});