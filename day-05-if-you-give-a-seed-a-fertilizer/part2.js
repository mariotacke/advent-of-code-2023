module.exports = (input) => {
  const parts = input
    .split('\n\n')
    .map((part) => part.split('\n').map((line) => line.trim()));

  const seeds = parts[0][0]
    .split(': ')[1]
    .split(/(\d+\s*\d+)/)
    .filter((pair) => pair.trim().length)
    .map((s) => s.split(' ').map((n) => +n));

  const finder = parts.slice(1)
    .map((map) => {
      const lookup = map.slice(1).map((line) => line.split(' ').map((n) => +n));

      return (number) => {
        let result = number;

        for (let i = 0; i < lookup.length; i++) {
          const [destination, source, length] = lookup[i];

          if (number >= source && number <= source + length - 1) {
            result = destination + number - source;

            break;
          }
        }

        return result;
      };
    })
    .reduce((f, fn) => (n) => fn(f(n)), (n) => n);

  let minimum = Infinity;

  for (let i = 0; i < seeds.length; i++) {
    const [start, length] = seeds[i];

    for (let j = start; j < start + length; j++) {
      const result = finder(j);

      if (result < minimum) {
        minimum = result;
      }
    }
  }

  return minimum;
};
