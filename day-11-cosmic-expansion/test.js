const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 11: Cosmic Expansion', () => {
  it('should sum galaxy distances', () => {
    const input =
      `...#......
       .......#..
       #.........
       ..........
       ......#...
       .#........
       .........#
       ..........
       .......#..
       #...#.....`;

    assert.strictEqual(part1(input), 374);
  });

  describe('Part Two', () => {
    it('should sum distances with 100x expansion', () => {
      const input =
        `...#......
         .......#..
         #.........
         ..........
         ......#...
         .#........
         .........#
         ..........
         .......#..
         #...#.....`;

      assert.strictEqual(part2(input, 100), 8410);
    });
  });
});
