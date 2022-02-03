$(document).ready(function() {
  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    let form = $(this).serialize();
    $.ajax('/tweets', { method: 'POST', data: form});
  });
});