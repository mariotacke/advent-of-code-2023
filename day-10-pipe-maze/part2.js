// adapted from: https://www.algorithms-and-technologies.com/point_in_polygon/javascript
const pointInPolygon = function (polygon, point) {
  let odd = false;

  // for each edge (in this case for each point of the polygon and the previous one)
  for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
    // if a line from the point into infinity crosses this edge
    if (((polygon[i][1] > point[1]) !== (polygon[j][1] > point[1])) // one point needs to be above, one below our y coordinate
      // ...and the edge doesn't cross our x corrdinate before our x coordinate (but between our x coordinate and infinity)
      && (point[0] < ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]))) {
      odd = !odd;
    }

    j = i;
  }

  return odd;
};

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

  let vector = sn ? [0, -1] : se ? [1, 0] : ss ? [0, 1] : sw ? [-1, 0] : undefined;
  let position = [start[0], start[1]];
  let positions = new Set();
  let vertices = [];

  do {
    const [vx, vy] = vector;
    const [x2, y2] = [position[0] + vector[0], position[1] + vector[1]];
    const { n, e, s, w } = map[y2][x2];

    vector = vx === -1 ? (n ? [0, -1] : w ? [-1, 0] : [0, 1]) :
      vx === 1 ? (n ? [0, -1] : e ? [1, 0] : [0, 1]) :
        vy === -1 ? (n ? [0, -1] : e ? [1, 0] : [-1, 0]) :
          vy === 1 ? (s ? [0, 1] : e ? [1, 0] : [-1, 0]) : undefined;

    if (vector[0] !== vx && vector[1] !== vy) {
      vertices.push([x2, y2]);
    }

    position = [x2, y2];
    positions.add(`${position[0]},${position[1]}`);
  } while (position[0] !== start[0] || position[1] !== start[1]);

  let inside = 0;

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      inside += !positions.has(`${x},${y}`) && pointInPolygon(vertices, [x, y]) ? 1 : 0;
    }
  }

  return inside;
};
