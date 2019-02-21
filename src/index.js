export const main = () => 'Hello, World!';

export const sparky = (elem, values) => {
  const element = elementOrSelector(elem);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  const width = 160;
  const height = 90;

  const xRange = width / values.length;
  const yRange = height / Math.max(...values);

  console.log(Math.max(...values), yRange);

  var points = [];
  var path = '';
  values.forEach((dataPoint, index) => {
    path += (index === 0 ? 'M' : ' L') + ` ${index * xRange},${height - dataPoint * yRange}`;
    let point = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    point.setAttribute('x1', index * xRange);
    point.setAttribute('y1', height - dataPoint * yRange);
    point.setAttribute('x2', index * xRange * 1.2);
    point.setAttribute('y2', height - dataPoint * yRange * 1.2);
    point.setAttribute('class', 'sparky-point');
    points.push(point);
  });

  svgPath.setAttribute('d', path); //"M 1,97.857143 C 19.285714,96.428571 24.016862,131.64801 90.714286,132.85714 140.78762,133.7649 202.79376,66.16041 202.79376,66.16041");
  svgPath.setAttribute('stroke', 'black');
  svgPath.setAttribute('stroke-width', 1);
  svgPath.setAttribute('opacity', 1);
  svgPath.setAttribute('fill', 'none');

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.appendChild(svgPath);
  points.forEach(point => {
    svg.appendChild(point);
  });

  element.appendChild(svg);
};

export const elementOrSelector = object => {
  var element;

  if (typeof object === 'string' || object instanceof String) {
    element = document.getElementById(object) || document.querySelector(object);
  } else {
    element = object;
  }
  return element;
};
