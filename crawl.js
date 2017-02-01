/*const cheerio = require('cheerio');
const rp = require('request-promise');
const url = require('url');

rp('http://www.cnn.com/2017/01/04/politics/china-trump-twitter/')
  .then(function (htmlString) {
    console.log(htmlString);
    const $ = cheerio.load(htmlString);
    const twitterWidgets = $('a');
    twitterWidgets.each(function(i, elem) {
      console.log('\n\nnew row');
      console.log($(this).attr('href'));
      if ($(this).attr('href')) {
        const newUrl = url.resolve('http://www.cnn.com/2017/01/04/politics/china-trump-twitter/', $(this).attr('href'));

        console.log(newUrl);
        console.log(url.parse(newUrl).hostname);
      }
    });

    //console.log(twitterWidgets.prop('href'));
  })
  .catch(function (err) {
    console.log('error');
    console.log(err);
    // Crawling failed...
  });
*/

console.log('here');
const StaticCrawler = require('./crawlers/static-crawler');

const cnnCrawler = new StaticCrawler('http://www.cnn.com');
cnnCrawler.crawl();
