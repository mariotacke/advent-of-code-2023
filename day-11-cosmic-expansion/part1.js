module.exports = (input, expansion = 2) => {
  const seamsX = [];
  const seamsY = [];
  const galaxies = [];

  const universe = input.split('\n').reduce((u, line, y) => {
    const content = line.trim().split('');

    for (let x = 0; x < content.length; x++) {
      if (content[x] === '#') {
        galaxies.push([x, y]);
      }
    }

    if (content.every((item) => item === '.')) {
      seamsY.push(y);
    }

    u.push(content);

    return u;
  }, []);

  for (let x = 0; x < universe[0].length; x++) {
    const seam = universe.map((line) => line[x]);

    if (seam.every((item) => item === '.')) {
      seamsX.push(x);
    }
  }

  return galaxies
    .reduce((pairs, galaxy, i) => [
      ...pairs,
      ...galaxies.slice(i + 1).map((other) => {
        return [galaxy, other];
      }),
    ], [])
    .reduce((sum, [g1, g2]) => {
      const f = expansion - 1;
      const x1 = seamsX.filter((seam) => seam <= g1[0]).length * f + g1[0];
      const y1 = seamsY.filter((seam) => seam <= g1[1]).length * f + g1[1];
      const x2 = seamsX.filter((seam) => seam <= g2[0]).length * f + g2[0];
      const y2 = seamsY.filter((seam) => seam <= g2[1]).length * f + g2[1];

      return sum + Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }, 0);
};
