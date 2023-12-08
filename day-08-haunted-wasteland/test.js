const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 8: Haunted Wasteland', () => {
  it('should calculate number of steps', () => {
    const input =
      `LLR

       AAA = (BBB, BBB)
       BBB = (AAA, ZZZ)
       ZZZ = (ZZZ, ZZZ)`;

    assert.strictEqual(part1(input), 6);
  });

  describe('Part Two', () => {
    it('should calculate number of steps for all routes', () => {
      const input =
        `LR

         11A = (11B, XXX)
         11B = (XXX, 11Z)
         11Z = (11B, XXX)
         22A = (22B, XXX)
         22B = (22C, 22C)
         22C = (22Z, 22Z)
         22Z = (22B, 22B)
         XXX = (XXX, XXX)`;

      assert.strictEqual(part2(input), 6);
    });
  });
});
