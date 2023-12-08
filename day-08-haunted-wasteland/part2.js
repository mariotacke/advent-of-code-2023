const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);

module.exports = (input) => {
  const lines = input.split('\n').map((line) => line.trim());
  const instructions = lines[0].split('').map((x) => x === 'L' ? 0 : 1);
  const map = lines.slice(2).reduce((m, line) => {
    const [, node, left, right] = /(\w{3}) = \((\w{3}), (\w{3})\)/.exec(line);

    return {
      ...m,
      [node]: [left, right],
    };
  }, {});

  const next = (step) => step % instructions.length;

  return Object
    .keys(map)
    .filter((key) => key.endsWith('A'))
    .map((startNode) => {
      let node = startNode;
      let step = 0;

      while (!node.endsWith('Z')) {
        node = map[node][instructions[next(step++)]];
      }

      return step;
    })
    .reduce(lcm);
};
