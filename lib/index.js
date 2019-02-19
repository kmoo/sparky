'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.elementOrSelector = exports.sparky = exports.main = void 0;

var main = function main() {
  return 'Hello, World!';
};

exports.main = main;

var sparky = function sparky(elem) {
  var element = elementOrSelector(elem);
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // draw stuff!

  element.appendChild(svg);
};

exports.sparky = sparky;

var elementOrSelector = function elementOrSelector(object) {
  var element;

  if (typeof object === 'string' || object instanceof String) {
    element = document.getElementById(object) || document.querySelector(object);
  } else {
    element = object;
  }

  return element;
};

exports.elementOrSelector = elementOrSelector;
