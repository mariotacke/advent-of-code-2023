const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: Trebuchet?!', () => {
  it('should sum all calibration values', () => {
    const input =
      `1abc2
       pqr3stu8vwx
       a1b2c3d4e5f
       treb7uchet`;

    assert.strictEqual(part1(input), 142);
  });

  describe('Part Two', () => {
    it('should sum all calibration values properly', () => {
      const input =
        `two1nine
         eightwothree
         abcone2threexyz
         xtwone3four
         4nineeightseven2
         zoneight234
         7pqrstsixteen`;

      assert.strictEqual(part2(input), 281);
    });
  });
});
