const rp = require('request-promise');

class Cnn {
  constructor(url) {
    this.url = url || 'http://rss.cnn.com/rss/';
  }

  parseLatest () {
    return rp(this.url + 'cnn_latest.rss');
  }
}

module.exports = Cnn;
