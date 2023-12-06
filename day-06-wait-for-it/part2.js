module.exports = (input) => {
  const time = +input.split('\n')[0].split(':')[1].replace(/\s*/g, '');
  const distanceToBeat = +input.split('\n')[1].split(':')[1].replace(/\s*/g, '');

  let score = 0;

  for (let chargeTime = 0; chargeTime <= time; chargeTime++) {
    score += (chargeTime * (time - chargeTime) > distanceToBeat ? 1 : 0);
  }

  return score;
};
