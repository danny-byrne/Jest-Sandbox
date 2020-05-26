import { add, total } from './App.js';

//Unit testa only test one thing

test('add', () => {
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
})

//integration tests are about code that is working together.

test('total', () => {
  expect(total(5, 20)).toBe('$25')
})