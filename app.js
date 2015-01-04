var request = require('superagent');
var Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

setInterval(function() { 
  // get random word
  // tweet random word
}, 1800000);