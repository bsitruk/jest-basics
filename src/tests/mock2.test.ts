// Mocking Return Value
const myMock = jest.fn();

myMock.mockReturnValueOnce(10).mockReturnValue(5);

it('should return 10 and 5', () => {
  expect(myMock()).toBe(10);
  expect(myMock()).toBe(5);
});
