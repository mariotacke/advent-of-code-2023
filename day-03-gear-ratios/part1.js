module.exports = (input) => {
  const schematic = input
    .split('\n')
    .map((line) => line.trim());
  const empty = '.'.repeat(schematic[0].length);

  let sumOfPartNumbers = 0;

  for (let i = 0; i < schematic.length; i++) {
    const matches = schematic[i].matchAll(/(\d+)/g);

    for (const match of matches) {
      const j = match.index;

      const above = (schematic[i - 1] || empty).slice(Math.max(j - 1, 0), j + match[0].length + 1);
      const below = (schematic[i + 1] || empty).slice(Math.max(j - 1, 0), j + match[0].length + 1);
      const before = schematic[i].slice(j - 1, j) || '.';
      const after = schematic[i].slice(j + match[0].length, j + match[0].length + 1) || '.';

      const adjacentSymbols = (above + below + before + after).replace(/\d+/g, '.').replace(/\./g, '');

      sumOfPartNumbers += adjacentSymbols.length ? +match[0] : 0;
    }
  }

  return sumOfPartNumbers;
};
