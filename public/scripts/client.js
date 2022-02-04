/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  //Prevents Cross Site Scripting (XSS) - reformats text
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Function that uses template literals to insert data into a HTML markup
  const createTweetElement  = (tweetObject) => {
    //HTML MARKUP
  let $tweet = `
  <article class = "user-tweet">
  <div class = "tweet-header">
    <div class = "user-name">
    <img src=${tweetObject["user"].avatars}>
    ${tweetObject["user"].name}
  </div>
    <div class = "user-handle">
    ${tweetObject["user"].handle}
  </div>
  </div>
  <div class = "user-post">
    <p>
      ${escape(tweetObject["content"].text)}
    </p>
  </div>
  <div class = "footer">
    ${timeago.format(tweetObject["created_at"])}
    <div class = "icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
</article>
`;
  return $tweet;
}

//Function that loops through tweets and calls createTweetElement for each
//and prepends it to the tweets container
const renderTweets = (tweets) =>  {
  $('#tweet-container').text('');
  for (let tweet of tweets) {
    let $tweetPost = createTweetElement(tweet);
    $('#tweet-container').prepend($tweetPost);
  }
};

//Function that on form submission, loads the new tweet and clears form text on success
$(".tweet-form").on("submit", function(event) {
  event.preventDefault();
  let form = $(this).serialize();
  //variable to see how many characters are in the text
  let formLength = $(this).serializeArray()[0].value.length;
  //same as above but removes all white space to use to check if text is blank
  let emptyCheck= $(this).serializeArray()[0].value.replace(/\s+/g, '').length;
  //condition to check if text exceeds maximum allowed characters
  if (formLength > 140) {
    alert("Tweet exceeds the character limit!");
    return;
    //condition to check if text contains only spaces
  } else if (emptyCheck === 0) {
      alert("Tweet cannot be blank!");
      return;
      //if both conditions aren't triggered, loads new tweets
    } else {
      $.ajax('/tweets', { method: 'POST', data: form})
      .then(loadTweets);
      $('#tweet-text').val('');
    }
});

//function to load tweets
const loadTweets = () => {
  $.ajax({url: '/tweets', method: 'GET'})
  .then(tweets => renderTweets(tweets));
};


loadTweets();
});

