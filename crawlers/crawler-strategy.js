class CrawlerStrategy {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  crawl() {
    console.log('going to throw');
    throw new TypeError("crawl not implemented");
  }
}

module.exports = CrawlerStrategy;
