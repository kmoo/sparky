import { main, elementOrSelector } from './index';
import { idHtml, classHtml } from '../__tests__/fixtures';

test('expect a greeting', () => {
  expect(main()).toBe('Hello, World!');
});

test('given an element', () => {
  document.body.innerHTML = idHtml;
  expect(elementOrSelector('test')).toBeInstanceOf(HTMLDivElement);
  document.body.innerHTML = classHtml;
  expect(elementOrSelector('.test')).toBeInstanceOf(HTMLDivElement);
  var myElement = document.createElement('div');
  myElement.id = 'myId';
  document.body.appendChild(myElement);
  const myElement = document.getElementById('myId');
  expect(elementOrSelector(myElement)).toBeInstanceOf(HTMLDivElement);
});
