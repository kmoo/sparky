import { elementOrSelector } from './index';
import { idHtml, classHtml } from '../__tests__/fixtures';

describe('elementOrSelector', () => {
  describe('given an id', () => {
    it('returns an element', () => {
      document.body.innerHTML = idHtml;

      expect(elementOrSelector('test')).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('given a selelctor', () => {
    it('returns an element', () => {
      document.body.innerHTML = classHtml;

      expect(elementOrSelector('.test')).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('given an element', () => {
    it('returns an element', () => {
      document.body.innerHTML = '';

      // Set up a page with an element
      var myElement = document.createElement('div');
      myElement.id = 'myId';
      document.body.appendChild(myElement);

      expect(elementOrSelector(document.getElementById('myId'))).toBeInstanceOf(HTMLDivElement);
    });
  });
});
