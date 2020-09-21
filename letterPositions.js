const letterPositions = function(sentence) {
  const count = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
      if (count[sentence[i]]) {
        count[sentence[i]].push(i);
      } else {
        count[sentence[i]] = [i];
      }
    }
  }
  return count;
};

module.exports = letterPositions;