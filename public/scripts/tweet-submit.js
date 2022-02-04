$(document).ready(function() {
  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    let form = $(this).serialize();
    let formLength = $(this).serializeArray()[0].value.length;
    let emptyCheck= $(this).serializeArray()[0].value.replace(/\s+/g, '').length;
    if (formLength > 140) {
      alert("Tweet exceeds the character limit!");
      return;
    } else if (emptyCheck === 0) {
        alert("Tweet cannot be blank!");
        return;
      } else {
        $.ajax('/tweets', { method: 'POST', data: form});
      }
  });
});