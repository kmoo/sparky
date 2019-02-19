import { main } from './index';

test('expect a greeting', () => {
  expect(main()).toBe('Hello, World!');
});
