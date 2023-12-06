module.exports = (input) => {
  const times = input.split('\n')[0].split(/(\d+)/).filter((n) => /\d+/.test(n));
  const distances = input.split('\n')[1].split(/(\d+)/).filter((n) => /\d+/.test(n));

  let score = 1;

  for (let i = 0; i < times.length; i++) {
    const time = +times[i];
    const distanceToBeat = +distances[i];

    score *= Array
      .from({ length: time })
      .reduce((successes, _, chargeTime) => {
        return successes + (chargeTime * (time - chargeTime) > distanceToBeat ? 1 : 0);
      }, 0);
  }

  return score;
};
