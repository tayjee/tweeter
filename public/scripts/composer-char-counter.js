$(document).ready(function() {
  //Character counter
  $('#tweet-text').on('input', function() {
    const maxChars = 140;
    let characterCount = $(this).parent().siblings(".tweet-submit").children('.counter');

    characterCount.text(() => {
      if (maxChars - $(this).val().length < 0) {
        //Adds class to make the counter red if over the specified limit
        characterCount.addClass('overLimit');
      } else {
        //Removes class to remove the overLimit class that caused the text to be red.
        characterCount.removeClass('overLimit');
      }
      return (maxChars - $(this).val().length);
    });
  });
});