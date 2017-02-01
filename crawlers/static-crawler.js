const cheerio = require('cheerio');
const rp = require('request-promise');
const url = require('url');
const _ = require('lodash');
const http = require('http');
var httpAgent = new http.Agent()
httpAgent.maxSockets = 15

const CrawlerStrategy = require('./crawler-strategy');

class StaticCrawler extends CrawlerStrategy {
  crawl (maxDepth=3) {
    const urls = [this.baseUrl];
    const processedUrls = [];
    let count = 0;

    const loop = (url) => {
      console.log('searching ', _.includes(processedUrls, url), url);

      if (!_.includes(processedUrls, url)) {
        return rp(url)
          .then(htmlString => {
            processedUrls.push(url);

            return this.parseHtmlForUrls(htmlString);
          })
          .then(newUrls => {
            return newUrls;
          });
      }

      return [];
    };

    const outerLoop = (loopUrls=urls) => {
      return Promise.all(_.map(loopUrls, loop))
        .then(_.flatten)
        .then(nextUrls => {
          count++;

          const uniqueUrls = _.uniq(_.union(urls, nextUrls));

          if(count < maxDepth) {
            return outerLoop(uniqueUrls);
          }

          return uniqueUrls;
        });
    }

    outerLoop().then(nextUrls => {
      console.log(nextUrls);
      console.log(nextUrls.length);
    });
  }

  parseHtmlForUrls (html) {
    const baseUrl = this.baseUrl;
    const $ = cheerio.load(html);
    const anchorTags = $('a');

    const nextUrls = [];

    anchorTags.each(function (i, elem) {
      if ($(this).attr('href')) {
        const nextUrl = url.resolve(baseUrl, $(this).attr('href'));
        const parsedUrl = url.parse(nextUrl);
        if (`${parsedUrl.protocol}//${parsedUrl.hostname}` === baseUrl) {
          nextUrls.push(nextUrl);
        }

        console.log('next-url', nextUrls);
      }
    });

    return nextUrls;
  }
};

module.exports = StaticCrawler;
