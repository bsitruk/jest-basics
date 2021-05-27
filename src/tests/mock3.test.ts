import Users from '../Users';
import { sum } from '../sum';
import axios from 'axios';

// Mocking a module with jest.mock
// - mockReturnValue
// - mockResolvedValue() for resolved Promise
// - mockImplementation()

// Do not put jest.mock inside a test - but at the top of the file
jest.mock('axios');
jest.mock('../sum'); // happens automatically with automocking

it('should return some users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // Or we could return a Promise
  // axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then(data => expect(data).toEqual(users));
});

// Mock Implementation
// - With jest.fn()
// - With mockImplementation and mockImplementationOnce
it('should mock a function', () => {
  const myMock = jest.fn(x => x + 1);
  expect(myMock(1)).toBe(2);
});

it('should mock a module function implementation', () => {
  sum.mockImplementation((a, b) => a);
  expect(sum(1, 3)).toBe(1);
});
