const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 5: If You Give A Seed A Fertilizer', () => {
  it('should find lowest location number', () => {
    const input =
      `seeds: 79 14 55 13

       seed-to-soil map:
       50 98 2
       52 50 48

       soil-to-fertilizer map:
       0 15 37
       37 52 2
       39 0 15

       fertilizer-to-water map:
       49 53 8
       0 11 42
       42 0 7
       57 7 4

       water-to-light map:
       88 18 7
       18 25 70

       light-to-temperature map:
       45 77 23
       81 45 19
       68 64 13

       temperature-to-humidity map:
       0 69 1
       1 0 69

       humidity-to-location map:
       60 56 37
       56 93 4`;

    assert.strictEqual(part1(input), 35);
  });

  describe('Part Two', () => {
    it('should find lowest location number properly', () => {
      const input =
        `seeds: 79 14 55 13

         seed-to-soil map:
         50 98 2
         52 50 48

         soil-to-fertilizer map:
         0 15 37
         37 52 2
         39 0 15

         fertilizer-to-water map:
         49 53 8
         0 11 42
         42 0 7
         57 7 4

         water-to-light map:
         88 18 7
         18 25 70

         light-to-temperature map:
         45 77 23
         81 45 19
         68 64 13

         temperature-to-humidity map:
         0 69 1
         1 0 69

         humidity-to-location map:
         60 56 37
         56 93 4`;

      assert.strictEqual(part2(input), 46);
    });
  });
});
