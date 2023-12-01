module.exports = (input) => {
  return input
    .split('\n')
    .map((line) => {
      const result = [];

      for (let i = 0; i <= line.length + 1; i++) {
        const part = line.slice(i);

        if (/^\d/.test(line[i])) {
          result.push(line[i]);
        } else if (part.startsWith('one')) {
          result.push('1');
        } else if (part.startsWith('two')) {
          result.push('2');
        } else if (part.startsWith('three')) {
          result.push('3');
        } else if (part.startsWith('four')) {
          result.push('4');
        } else if (part.startsWith('five')) {
          result.push('5');
        } else if (part.startsWith('six')) {
          result.push('6');
        } else if (part.startsWith('seven')) {
          result.push('7');
        } else if (part.startsWith('eight')) {
          result.push('8');
        } else if (part.startsWith('nine')) {
          result.push('9');
        }
      }

      return result.join('');
    })
    .reduce((sum, line) => {
      const [, first] = /^\D*(\d{1})/.exec(line);
      const [, last] = /(\d{1})\D*$/.exec(line);

      return sum + parseInt(`${first}${last}`);
    }, 0);
};
