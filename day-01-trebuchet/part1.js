module.exports = (input) => {
  return input
    .split('\n')
    .reduce((sum, line) => {
      const [, first] = /^\D*(\d{1})/.exec(line);
      const [, last] = /(\d{1})\D*$/.exec(line);

      return sum + parseInt(`${first}${last}`);
    }, 0);
};
