const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 9: Mirage Maintenance', () => {
  it('should sum extrapolated values', () => {
    const input =
      `0 3 6 9 12 15
       1 3 6 10 15 21
       10 13 16 21 30 45`;

    assert.strictEqual(part1(input), 114);
  });

  describe('Part Two', () => {
    it('should extrapolate values backwards', () => {
      const input =
        `0 3 6 9 12 15
         1 3 6 10 15 21
         10 13 16 21 30 45`;

      assert.strictEqual(part2(input), 2);
    });
  });
});
