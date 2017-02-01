const rp = require('request-promise');

class FoxNews {
  constructor(url) {
    this.url = url || 'http://feeds.foxnews.com/foxnews/';
  }

  parseLatest () {
    return rp(this.url + 'latest.rss');
  }
}

module.exports = FoxNews;
