// Order of Execution
// - Jest first executes all describe handlers before executing any of the tests
// - Jest then runs the before* and after* handlers (outer -> inner for before*, inner -> outer for after*)
//   as it is running the tests in the order they were encountered in the collection phase

// Use test.only to run only a specific test

let cities = [];

beforeAll(() => {
  console.log('Before All Tests !!');
});

beforeEach(() => {
  cities = [];
});

afterEach(() => {
  console.log('After each test:', cities);
});

test('cities has Vienna', () => {
  cities.push('Vienna');
  expect(cities).toContain('Vienna');
});

test('cities to be empty', () => {
  expect(cities).toHaveLength(0);
});

describe('with Paris scoped block', () => {
  beforeEach(() => {
    cities.push('Paris');
  });

  it('should contain Paris', () => {
    expect(cities).toContain('Paris');
  });

  // Run Only this test
  // it.only('should contain Paris', () => {
  //   expect(cities).toContain('Paris');
  // });
});
