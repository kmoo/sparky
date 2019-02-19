export const main = () => 'Hello, World!';

export const sparky = elem => {
  const element = elementOrSelector(elem);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  // draw stuff!

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
