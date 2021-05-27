// Null, Undefined, Truthiness //
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// Numbers //
test('2 + 2', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeLessThanOrEqual(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

// strings //
test('there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Array and Iterables //
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

// Exceptions //
function triggerError() {
  throw new Error('Bad stuff');
}

test('should trigger an error', () => {
  expect(() => triggerError()).toThrow();
  expect(() => triggerError()).toThrow(Error);
  expect(() => triggerError()).toThrow('Bad stuff');
  expect(() => triggerError()).toThrow(/Bad/);
});
