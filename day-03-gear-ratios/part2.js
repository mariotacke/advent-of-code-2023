module.exports = (input) => {
  const schematic = input
    .split('\n')
    .map((line) => line.trim());

  let sumOfGearRatios = 0;
  const gears = [];

  for (let i = 0; i < schematic.length; i++) {
    for (const gear of schematic[i].matchAll(/(\d+)/g)) {
      gears.push({
        size: +gear[0],
        row: i,
        x1: gear.index,
        x2: gear.index + gear[0].length - 1,
      });
    }
  }

  for (let i = 0; i < schematic.length; i++) {
    for (const match of schematic[i].matchAll(/\*/g)) {
      const j = match.index;

      const adjacentGears = gears
        .filter((gear) => {
          return (gear.row === i - 1 && [j - 1, j, j + 1].some((k) => k <= gear.x2 && k >= gear.x1)) ||
                 (gear.row === i + 1 && [j - 1, j, j + 1].some((k) => k <= gear.x2 && k >= gear.x1)) ||
                 (gear.row === i && (gear.x2 === j - 1 || gear.x1 === j + 1));
        });

      sumOfGearRatios += adjacentGears.length === 2 ? adjacentGears[0].size * adjacentGears[1].size : 0;
    }
  }

  return sumOfGearRatios;
};
