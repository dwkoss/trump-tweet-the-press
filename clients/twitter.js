const Twit = require('twit')

class Twitter {
  constructor (options) {
    this.twit = new Twit(options);
  }

  getUserStatuses({screen_name}) {
    return this.twit.get('statuses/user_timeline', { screen_name: screen_name, count: 200 });
  }
}

module.exports = Twitter;
