var uniq = require('uniq');
module.exports = function wobot (s) { return uniq(s) };
module.exports.uniq = uniq;
