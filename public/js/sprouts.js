//Pair coding with Jeremy, Phillip, Casey
var pageNum = 1
//load next page of tweets
var addMore = function(){
  pageNum++;
  $.get("/tweets.json?page=" + pageNum, function(moreTweets) {
    var text, username, tweet;
    for(var i=0; i<moreTweets.length; i++){
      text = moreTweets[i].text;
      username = moreTweets[i].username;
      tweet = '<li class="tweet">' +
                  ' <div class="body">' + text + '</div>' +
                  ' <div class="user">' + username + '</div>' +
                  '</li>';

      $(".tweets").append(tweet);

    }
  });
};
//load more when scrolled to end
$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        addMore();
    }
});
//load more on click
$(".more-sprouts").on("click", function() {
  event.preventDefault();
  addMore();
});
