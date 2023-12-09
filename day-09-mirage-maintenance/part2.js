module.exports = (input) => {
  return input
    .split('\n')
    .reduce((sum, line) => {
      const sequences = [line.trim().split(' ').map((n) => +n)];

      let s = 0;
      let extrapolated = 0;

      while (!sequences.slice(-1)[0].every((n) => n === 0)) {
        const next = [];

        for (let i = 0; i < sequences[s].length - 1; i++) {
          const [first, second] = sequences[s].slice(i, i + 2);

          next.push(second - first);
        }

        sequences.push(next);
        s++;
      }

      for (let i = sequences.length - 1; i > 0; i--) {
        extrapolated = sequences[i - 1][0] - extrapolated;
      }

      return sum + extrapolated;
    }, 0);
};
