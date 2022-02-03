/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {


const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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
    $('#tweet-container').append($tweetPost);
  }
};

renderTweets(data);
});

