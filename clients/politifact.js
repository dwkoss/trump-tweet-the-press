const rp = require('request-promise');

class Politifact {
  getRulings({person_id}) {
    return rp({
      uri: `http://www.politifact.com/api/statements/truth-o-meter/people/${person_id}/json/?n=500`,
      json: true
    });
  }
}

module.exports = Politifact;
