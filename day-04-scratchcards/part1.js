module.exports = (input) => {
  return input
    .split('\n')
    .reduce((sum, line) => {
      let [winners, numbers] = line
        .trim()
        .split(':')[1]
        .split(' | ')
        .map((numbers) => numbers.trim().split(/\s+/).map((n) => +n));

      winners = new Set(winners);

      return sum + Math.floor(2 ** (numbers.filter((n) => winners.has(n)).length - 1));
    }, 0);
};
