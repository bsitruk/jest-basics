import { forEach } from '../forEach';

// Mock Callback (Calls and Return Value) //
const mockCallback = jest.fn((x: number) => 1 + x);

it('should call the mock twice', () => {
  forEach([1, 2], mockCallback);

  // Calls: number of calls, and parameters
  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);

  // Return Values
  expect(mockCallback.mock.results[0].value).toBe(2);
});

// Mock Constructor: Monitor instantiations //
const mockConstructor = jest.fn(function Person(name: string) {
  this.name = name;
});

it('should instantiate the mock twice', () => {
  const a = new mockConstructor('test');
  const b = {};
  const bound = mockConstructor.bind(b);
  bound('second test');

  expect(mockConstructor.mock.instances).toHaveLength(2);
  expect(mockConstructor.mock.instances[0].name).toBe('test');
  expect(mockConstructor.mock.instances[1].name).toBe('second test');
});
