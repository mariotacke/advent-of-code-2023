module.exports = (input) => {
  const parts = input
    .split('\n\n')
    .map((part) => part.split('\n').map((line) => line.trim()));

  const seeds = parts[0][0]
    .split(': ')[1]
    .split(/(\d+\s*\d+)/)
    .filter((pair) => pair.trim().length)
    .map((s) => s.split(' ').map((n) => +n));

  const isValidSeed = (seed) => {
    for (let i = 0; i < seeds.length; i++) {
      if (seed >= seeds[i][0] && seed <= seeds[i][0] + seeds[i][1]) {
        return true;
      }
    }
  };

  const reverseFinder = parts.slice(1)
    .reverse()
    .map((map) => {
      const lookup = map.slice(1).map((line) => line.split(' ').map((n) => +n));

      return (number) => {
        let result = number;

        for (let i = 0; i < lookup.length; i++) {
          const [source, destination, length] = lookup[i];

          if (number >= source && number <= source + length - 1) {
            result = destination + number - source;

            break;
          }
        }

        return result;
      };
    })
    .reduce((f, fn) => (n) => fn(f(n)), (n) => n);

  for (let minimum = 0; minimum < Infinity; minimum++) {
    const result = reverseFinder(minimum);

    if (isValidSeed(result)) {
      return minimum;
    }
  }
};
