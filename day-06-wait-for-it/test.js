const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 6: Wait For It', () => {
  it('should find number of ways to beat the record', () => {
    const input =
      `Time:      7  15   30
       Distance:  9  40  200`;

    assert.strictEqual(part1(input), 288);
  });

  describe('Part Two', () => {
    it('should find number of ways to beat the record in longer race', () => {
      const input =
        `Time:      7  15   30
         Distance:  9  40  200`;

      assert.strictEqual(part2(input), 71503);
    });
  });
});
