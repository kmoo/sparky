export const main = () => 'Hello, World!';

export const sparky = elem => {
  const element = elementOrSelector(elem);

  console.log(element);
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
