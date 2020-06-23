'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.elementOrSelector = exports.sparky = void 0;

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var sparky = function sparky(elem, values) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var element = elementOrSelector(elem);
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var width = 160;
  var height = 90;
  var xRange = width / values.length;
  var yRange = height / Math.max.apply(Math, _toConsumableArray(values));
  var points = [];
  var path = '';
  values.forEach(function (dataPoint, index) {
    path +=
      (index === 0 ? 'M' : ' L') +
      ' '.concat(index * xRange, ',').concat(height - dataPoint * yRange);

    if (options.points) {
      var point = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      point.setAttribute('x1', index * xRange);
      point.setAttribute('y1', height - dataPoint * yRange);
      point.setAttribute('x2', index * xRange);
      point.setAttribute('y2', height - dataPoint * yRange);
      point.setAttribute('class', 'sparky-point');
      points.push(point);
    }
  });
  svgPath.setAttribute('d', path); //"M 1,97.857143 C 19.285714,96.428571 24.016862,131.64801 90.714286,132.85714 140.78762,133.7649 202.79376,66.16041 202.79376,66.16041");

  svgPath.setAttribute('stroke', 'black');
  svgPath.setAttribute('stroke-width', 1);
  svgPath.setAttribute('opacity', 1);
  svgPath.setAttribute('fill', 'none');
  svgPath.setAttribute('class', 'sparky-line');
  svg.setAttribute('viewBox', '0 0 '.concat(width, ' ').concat(height));
  svg.appendChild(svgPath);
  points.forEach(function (point) {
    svg.appendChild(point);
  });
  element.appendChild(svg);
};

exports.sparky = sparky;

var elementOrSelector = function elementOrSelector(object) {
  if (typeof object === 'string' || object instanceof String) {
    return document.getElementById(object) || document.querySelector(object);
  } // Consider adding else-if here to check for HTML Element,
  //   otherwise, return null

  return object;
};

exports.elementOrSelector = elementOrSelector;
