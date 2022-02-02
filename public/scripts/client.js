/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

function createTweetElement (tweetObject) {
  const time = timeago.format(tweetObject.created_at);

  let tweetElement = `
  <article class = "user-tweet">
  <div class = "tweet-header">
    <div class = "user-name">
    <i class="fas fa-smile-beam"></i> 
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
    ${time}
    <div class = "icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
</article>
  `;

  return tweetElement;
}

const data = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  tweets.forEach((tweetObject) => {
    $('#tweets-container').append(createTweetElement(tweetObject));
  });
};
});

renderTweets(data);