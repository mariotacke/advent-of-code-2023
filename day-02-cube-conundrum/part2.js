module.exports = (input) => {
  return input
    .split('\n')
    .reduce((sum, line) => {
      const [, cubes] = /: (.*)/.exec(line);
      const min = cubes
        .split('; ')
        .reduce((min, set) => {
          const colors = {
            r: +(/(\d+) red/.exec(set) || ['', '0'])[1],
            g: +(/(\d+) green/.exec(set) || ['', '0'])[1],
            b: +(/(\d+) blue/.exec(set) || ['', '0'])[1],
          };

          return {
            r: colors.r >= min.r ? colors.r : min.r,
            g: colors.g >= min.g ? colors.g : min.g,
            b: colors.b >= min.b ? colors.b : min.b,
          };
        }, { r: 0, g: 0, b: 0 });

      return sum + min.r * min.g * min.b;
    }, 0);
};
