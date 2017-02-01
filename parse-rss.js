const Cnn = require('./clients/cnn');
const FoxNews = require('./clients/fox-news');

const myCnn = new Cnn();
const myFoxNews = new FoxNews();


/*myCnn.parseRSS()
  .then(rss => {
    console.log(rss);
  })*/

  myFoxNews.parseLatest()
    .then(rss => {
      console.log(rss);
    })
