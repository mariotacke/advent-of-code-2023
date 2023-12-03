const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 3: ', () => {
  it('should sum all part numbers in the engine schematic', () => {
    const input =
      `467..114..
       ...*......
       ..35..633.
       ......#...
       617*......
       .....+.58.
       ..592.....
       ......755.
       ...$.*....
       .664.598..`;

    assert.strictEqual(part1(input), 4361);
  });

  describe('Part Two', () => {
    it('should sum all gear ratios in the engine schematic', () => {
      const input =
        `467..114..
         ...*......
         ..35..633.
         ......#...
         617*......
         .....+.58.
         ..592.....
         ......755.
         ...$.*....
         .664.598..`;

      assert.strictEqual(part2(input), 467835);
    });
  });
});
