/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

const createTweetElement  = (tweetObject) => {
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
      ${tweetObject["content"].text}
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

const renderTweets = (tweets) =>  {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    let $tweetPost = createTweetElement(tweet);
    $('#tweet-container').prepend($tweetPost);
  }
};

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
      $.ajax('/tweets', { method: 'POST', data: form})
      .then(tweets => loadTweets(tweets));
    }
});

const loadTweets = () => {
  $.ajax({url: '/tweets', method: 'GET'})
  .then(tweets => renderTweets(tweets));
};


loadTweets();
});

