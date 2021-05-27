import { sum } from '../sum';

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = { two: 2 };
  expect(data).toEqual({ one: 1, two: { two: 2 } });
});
