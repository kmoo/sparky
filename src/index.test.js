const main = require('./index');

test('expect a greeting', () => {
  expect(main()).toBe('Hello, World!');
});
