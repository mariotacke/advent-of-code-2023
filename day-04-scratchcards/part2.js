module.exports = (input) => {
  return input
    .split('\n')
    .map((line) => {
      const [winners, numbers] = line
        .trim()
        .split(':')[1]
        .split(' | ')
        .map((numbers) => numbers.trim().split(/\s+/).map((n) => +n));

      return {
        count: 1,
        winners: new Set(winners),
        numbers: numbers,
      };
    })
    .reduce((sum, card, i, cards) => {
      const numberOfWinners = card.numbers.filter((number) => card.winners.has(number)).length;

      Array.from({ length: numberOfWinners }).forEach((_, n) => {
        cards[i + n + 1].count += 1 * card.count;
      });

      return sum + card.count;
    }, 0);
};
