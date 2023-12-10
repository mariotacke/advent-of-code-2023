module.exports = (input) => {
  let start = [0, 0];

  const map = input.split('\n').map((line, y) => {
    return line.trim().split('').map((pipe, x) => {
      if (pipe === 'S') {
        start = [x, y];
      }

      return {
        n: ['|', 'L', 'J'].includes(pipe),
        e: ['-', 'L', 'F'].includes(pipe),
        s: ['|', '7', 'F'].includes(pipe),
        w: ['-', 'J', '7'].includes(pipe),
      };
    });
  });

  // patch map
  const sn = ((map[start[1] - 1] || [])[start[0]] || { s: false }).s;
  const se = (map[start[1]][start[0] + 1] || { w: false }).w;
  const ss = ((map[start[1] + 1] || [])[start[0]] || { n: false }).n;
  const sw = (map[start[1]][start[0] - 1] || { e: false }).e;

  if (sn && ss) {
    map[start[1]][start[0]] = { n: true, e: false, s: true, w: false };
  } else if (sw && se) {
    map[start[1]][start[0]] = { n: false, e: true, s: false, w: true };
  } else if (sn && se) {
    map[start[1]][start[0]] = { n: true, e: true, s: false, w: false };
  } else if (sn && sw) {
    map[start[1]][start[0]] = { n: true, e: false, s: false, w: true };
  } else if (ss && sw) {
    map[start[1]][start[0]] = { n: false, e: false, s: true, w: true };
  } else if (ss && se) {
    map[start[1]][start[0]] = { n: false, e: true, s: true, w: false };
  }

  let steps = 0;
  let vector = sn ? [0, -1] : se ? [1, 0] : ss ? [0, 1] : sw ? [-1, 0] : undefined;
  let position = [start[0], start[1]];

  do {
    const [vx, vy] = vector;
    const [x2, y2] = [position[0] + vector[0], position[1] + vector[1]];
    const { n, e, s, w } = map[y2][x2];

    vector = vx === -1 ? (n ? [0, -1] : w ? [-1, 0] : [0, 1]) :
      vx === 1 ? (n ? [0, -1] : e ? [1, 0] : [0, 1]) :
        vy === -1 ? (n ? [0, -1] : e ? [1, 0] : [-1, 0]) :
          vy === 1 ? (s ? [0, 1] : e ? [1, 0] : [-1, 0]) : undefined;

    position = [x2, y2];
    steps++;
  } while (position[0] !== start[0] || position[1] !== start[1]);

  return Math.ceil(steps / 2);
};
