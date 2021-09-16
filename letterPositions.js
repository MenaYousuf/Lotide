const letterPositions = function(sentence) {
  const result = {};

  const str = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (!str[i].match(/ /)) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};
