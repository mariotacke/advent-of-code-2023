module.exports = (input) => {
  const load = {
    r: 12,
    g: 13,
    b: 14,
  };

  return input
    .split('\n')
    .reduce((sum, line) => {
      const [, id, cubes] = /Game (\d+): (.*)/.exec(line);
      const sets = cubes.split('; ').map((set) => ({
        r: +(/(\d+) red/.exec(set) || ['', '0'])[1],
        g: +(/(\d+) green/.exec(set) || ['', '0'])[1],
        b: +(/(\d+) blue/.exec(set) || ['', '0'])[1],
      }));

      if (sets.every((set) => load.r >= set.r &&
                              load.g >= set.g &&
                              load.b >= set.b)) {
        return sum + +id;
      }

      return sum;
    }, 0);
};
