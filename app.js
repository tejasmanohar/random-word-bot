var request = require('superagent');
var Twit = require('twit');

var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

setInterval(function() { 
  request
    .get('http://randomword.setgetgo.com/get.php')
    .end(function(error, res) {
      if(error) {
        return error;
      } else {
        T.post('statuses/update', { status: res.text }, function(err, data, response) {
          if(err) {
            return err;
          } else {
            return response;
          }
        });
      } 
    });
}, 1800000);