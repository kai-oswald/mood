var Twitter = require("twitter");
var sentiment = require("sentiment");
var config = require("./config");
var moment = require("moment");
var client = new Twitter(config.twitter);

/**
 * get all tweets for a specific username
 * 
 * @param {String} userName the twitter username
 * @param {Function} cb the callback function
 */
exports.getTweets = function (userName, cb) {
  client.get("/statuses/user_timeline/" + userName + ".json?screen_name=" + userName + "&include_rts=false", function (err, tweets, res) {
    cb(err, tweets);
  });
}

/**
 * get detailed mood model by username
 * 
 * @param {String} userName the twitter username
 * @param {Function} cb the callback function
 */
exports.getMood = function (userName, cb) {
  console.log("getting mood for " + userName);
  this.getTweets(userName, function (err, tweets) {
    if (!err) {
      var parsedTweets = parseTweets(tweets);
      var sentiments = getSentiments(parsedTweets);
      var mood = {
        average: exports.getAverage(sentiments),
        mostPositive: exports.getMostPositive(sentiments),
        mostNegative: exports.getMostNegative(sentiments),
        timeline: exports.getTimeline(parsedTweets)
      }
    }
    cb(err, mood);
  });
}

function parseTweets(tweets) {
  var parsedTweets = [];
  tweets.forEach(function (tweet) {
    var reducedTweet = {
      text: tweet.text,
      date: tweet.created_at,
      retweet_count: tweet.retweet_count,
      favorite_count: tweet.favorite_count
    }
    parsedTweets.push(reducedTweet);
  })
  return parsedTweets;
}

function getSentiments(tweets) {
  var combined = [];
  tweets.forEach(function (tweet) {
    var combine = {
      score: sentiment(tweet.text).score,
      tweet: tweet
    };
    combined.push(combine);
  });
  return combined;
}

function formatTimeline(timeline) {
  if (timeline.length > 0) {
    var data = [];
    timeline.forEach(function (entry) {
      var tweetDate = entry.date;
      var date = moment(tweetDate, "dd MMM DD HH:mm:ss ZZ YYYY", "en").format("DD.MM.YYYY");
      var newD = new Date(date);
      var y = newD.getFullYear();
      var d = newD.getDate();
      var m = newD.getMonth();
      data.push([Date.UTC(y, m, d), entry.score]);
    });
    return data;
  }
}
/**
 * get sentiments for tweets by twitter username
 * 
 * @param {String} userName the twitter username
 * @param {Function} cb the callback function
 */
exports.getSentiments = function (userName, cb) {
  this.getTweets(userName, function (err, tweets) {
    if (!err) {
      var parsedTweets = parseTweets(tweets);
      var sentiments = getSentiments(parsedTweets);
    }
    cb(err, sentiments);
  });
}

/**
 * get the average score of given array of sentiments
 * @param {Array} sentiments array of sentiments of which the average score is calculated
 * @returns the average score
 */
exports.getAverage = function (sentiments) {
  if (sentiments.length === 0) {
    return 0;
  }
  var total = 0;
  sentiments.forEach(function (sentiment) {
    total += sentiment.score;
  });
  return Math.round((total / sentiments.length) * 100) / 100;
}

/**
 * get the most positive sentiment
 * 
 * @param {Array} sentiments an array of sentiments
 * @returns the most positive sentiment in the given array
 */
exports.getMostPositive = function (sentiments) {
  var mostPositive;
  sentiments.forEach(function (sentiment) {
    if (!mostPositive) {
      mostPositive = sentiment;
    }
    if (sentiment.score > mostPositive.score) {
      mostPositive = sentiment;
    }
  });
  return mostPositive;

}

/**
 * get the most negative sentiment
 * 
 * @param {Array} sentiments an array of sentiments
 * @returns the most negative sentiment in the given array
 */
exports.getMostNegative = function (sentiments) {
  var mostNegative;
  sentiments.forEach(function (sentiment) {
    if (!mostNegative) {
      mostNegative = sentiment;
    }
    if (sentiment.score < mostNegative.score) {
      mostNegative = sentiment;
    }
  });
  return mostNegative;
}

exports.getTimeline = function (tweets) {
  // score + date
  var timeline = [];
  tweets.forEach(function (tweet) {
    var scoreAtDate = {
      score: sentiment(tweet.text).score,
      date: tweet.date
    }
    timeline.push(scoreAtDate);
  });
  return formatTimeline(timeline);
}
