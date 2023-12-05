module.exports = (input) => {
  const parts = input
    .split('\n\n')
    .map((part) => part.split('\n').map((line) => line.trim()));

  const seeds = parts[0][0].split(': ')[1].split(' ').map((s) => +s);

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

  return Math.min(...seeds.map((seed) => finder(seed)));
};
